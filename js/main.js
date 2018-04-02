/**
* main javaScript of index.html
*/

function app() {
	var main = function () {
		this.name = 'Link'
		this.point = '.'
		this.top = 0
		this.obj = []
		this.jump = null
	}

	main.prototype = {
		init: function () {
			console.log(this.name)
			this.findDocument()
			if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
			    console.log('mobile')
			    this.obj[1].style.display = 'none';
			    this.obj[2].style.left = '0';
			    this.obj[2].style.width = '100%';
			} else {
				this.listenScroll()
			}
		},
		findDocument: function () {
			this.obj.push(document.querySelector('#mainPoint'))
			this.obj.push(document.querySelector('#start'))
			this.obj.push(document.querySelector('.content'))
			this.jump = document.querySelectorAll('a')
			console.log(this.jump)
			this.onJump()
			this.top = this.obj[1].getBoundingClientRect().height
			this.updataDocument()	// 持续更新动画
		},
		listenScroll: function () {
			window.onscroll = (e) => {
				let top = this.getScrollTop()
				if (top >= this.top) {
					this.obj[1].style.position = 'fixed';
				} else {
					this.obj[1].style.position = 'absolute';
				}
			}
		},
		getScreen: function () {
			return {
				'width': document.body.clientWidth,
				'height': document.body.scrollHeight
			}
		},
		updataDocument: function () {
			console.log(this.obj)
			var str = ''
				that = this
				count = 0
			var t = setInterval(function () {
				count > 6 ? count = 0 : count ++
				count > 6 ? str = '' : str += that.point
				that.obj[0].innerHTML = str
			}, 400)
		},
		getScrollTop: function () {   
		    var scrollTop=0;   
		    if(document.documentElement&&document.documentElement.scrollTop){   
		        scrollTop=document.documentElement.scrollTop;   
		    }else if(document.body){   
		        scrollTop=document.body.scrollTop;   
		    }   
		    return scrollTop;   
		},
		scrollTo: function (id) {
			console.log($('#'+id))
			$("html,body").animate({scrollTop: $('#'+id).offset().top}, 300);
		},
		// 事件委托
		onJump: function () {
			let that = this
			document.querySelector('.sidebar').onclick = function (e) {
				if (e.target.localName === 'a') {
					// console.log(e.target.localName)
					console.log(e.target.text)
					that.scrollTo(e.target.text)
					// console.log(e)
				}
			}
			document.querySelector('.coverMain div a').onclick = function (e) {
				that.scrollTo('start')
			}
			document.querySelector('.mark').onclick = function (e) {
				if (e.target.localName === 'h2') {
					console.log(e.target.id)
					that.scrollTo(e.target.id)
				}
			}
		}
	}

	var app = new main()
	app.init()
}

window.onload = app()