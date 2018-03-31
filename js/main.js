/**
* main javaScript of index.html
*/

function app() {
	var main = function () {
		this.name = 'Link'
		this.point = '.'
		this.top = 0
		this.obj = []
	}

	main.prototype = {
		init: function () {
			console.log(this.name)
			this.listenScroll()
			this.findDocument()
		},
		findDocument: function () {
			this.obj.push(document.querySelector('#mainPoint'))
			this.obj.push(document.querySelector('#start'))
			this.top = this.obj[1].getBoundingClientRect().height
			this.updataDocument()	// 持续更新动画
		},
		listenScroll: function () {
			window.onscroll = (e) => {
				// console.log(e)
				// console.log(this.getScrollTop())
				// console.log(this.getScreen().height)
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
		}  
	}

	var app = new main()
	app.init()
}

window.onload = app()