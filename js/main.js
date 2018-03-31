/**
* main javaScript of index.html
*/

function app() {
	var main = function () {
		this.name = 'Link'
		this.point = '.'
		this.obj = []
	}

	main.prototype = {
		init: function () {
			console.log(this.name)
			this.findDocument()
		},
		findDocument: function () {
			this.obj.push(document.querySelector('#mainPoint'))
			this.updataDocument()	// 持续更新动画
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
		}
	}

	var app = new main()
	app.init()
}

window.onload = app()