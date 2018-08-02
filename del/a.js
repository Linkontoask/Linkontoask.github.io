var ids = [],
		title = ['您容易疲乏吗', '您容易气短(呼吸短促,接不上气)吗',
				'您容易心慌吗',
				'您容易头晕或站起时晕眩吗',
				'您比别人容易患感冒吗',
				'您喜欢安静、懒得说话吗',
				'您说话声音无力吗',
				'您活动量稍大就容易出虚汗吗',
				'您感到手脚心发热吗',
				'您感觉身体、脸上发热吗',
				'您皮肤或口唇干吗',
				'您口唇的颜色比一般人红吗',
				'您容易便秘或大便干燥吗',
				'您面部潮红或偏红吗',
				'您感到眼晴干涩吗',
				'您活动量稍大就容易出虚汗吗',
				'您手脚发凉吗',
				'您胃脘部、背部或腰膝部怕冷吗',
				'您感到怕冷、衣服比别人穿得多吗',
				'您比一般人受不了寒冷(冬天的寒冷,夏天的冷空调、电扇等)吗',
				'您比别人容易患感冒吗',
				'您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉东西吗',
				'您受凉或吃(喝)凉的东西后,容易腹泻(拉肚子)吗',
				'您感到胸闷或腹部胀满吗',
				'您感到身体不轻松或不爽快吗',
				'您腹部肥满松软吗',
				'您有额部油脂分泌多的现象吗',
				'您上眼脸比别人肿(轻微隆起的现象)吗',
				'您嘴里有黏黏的感觉吗',
				'您平时痰多,特别是咽喉部总感到有痰堵着吗',
				'您舌苔厚腻或有舌苔厚厚的感觉吗',
				'您面部或鼻部有油腻感或者油亮发光吗',
				'您容易生痤疮或疮疖吗',
				'您感到口苦或嘴里有异味吗',
				'您有大便黏滞不爽、解不尽的感觉吗',
				'您小便时尿道有发热感、尿色浓(深)吗',
				'您带下色黄(白带颜色发黄)吗?(限女性回答)',
				'您的阴囊部位潮湿吗?(限男性回答)',
				'您的皮肤在不知不中会出现青紫瘀斑(皮下出血)吗',
				'您两颧部有细微红丝吗',
				'您身体上有哪里疼痛吗',
				'您面色晦暗或容易出现褐斑吗',
				'您容易有黑眼圈吗',
				'您容易忘事(健忘)吗',
				'您口唇颜色偏暗吗',
				'您没有感冒时也会打喷嚏吗',
				'您没有感冒时也会鼻塞、流鼻涕吗',
				'您有因季节变化、温度变化或异味等原因而咳喘的现象吗',
				'您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗',
				'您的皮肤容易起荨麻疹(风团风疹块、风疙瘩)吗',
				'您因过敏出现过紫癜(紫红色瘀点、瘀班)吗',
				'您的皮肤一抓就红,并出现抓痕吗',
				'您精力充沛吗',
				'您容易疲乏吗',
				'您说话声音无力吗',
				'您感到闷闷不乐吗',
				'您比一般人耐受不了寒冷(冬天的寒冷,夏天的冷空调、电扇)吗',
				'您能适应外界自然和社会环境的变化吗',
				'您容易失眠吗',
				'您容易忘事(健忘)吗',
				'您感到闷闷不乐吗',
				'您容易精神紧张、焦虑不安吗',
				'您多愁善感、感情脆弱吗',
				'您容易感到害怕或受到惊吓吗',
				'您胁肋部或乳房胀痛吗',
				'您会无缘无故叹气吗',
				'您咽喉部有异物感,且吐之不出、咽之不下吗'],
		lenIndex = 0,
		main = document.querySelector('#main');

	for (var i = 0; i < title.length; i++) {
		ids.push('notIds' + i);
	}

	console.log(ids)


	function addHtml(i, d) {
		var indexs = 0;
		return `
			<section>
				<h5>${ title[i] }</h5>
				<ul class="border">
					<li class="custom-control custom-radio"><input type="radio" value="${ i >= 53 && i != 57 && i != 60 && i != 65 ? '5' : '1'  }" class="custom-control-input" id="${ ids[d] + indexs }" name="radio-stacked-${ ids[d] }"><label class="custom-control-label" for="${ ids[d] + indexs++ }">没有</label></li>
					<li class="custom-control custom-radio"><input type="radio" value="${ i >= 53 && i != 57 && i != 60 && i != 65 ? '4' : '2'  }" class="custom-control-input" id="${ ids[d] + indexs }" name="radio-stacked-${ ids[d] }"><label class="custom-control-label" for="${ ids[d] + indexs++ }">很少</label></li>
					<li class="custom-control custom-radio"><input type="radio" value="${ i >= 53 && i != 57 && i != 60 && i != 65 ? '3' : '3'  }" class="custom-control-input" id="${ ids[d] + indexs }" name="radio-stacked-${ ids[d] }"><label class="custom-control-label" for="${ ids[d] + indexs++ }">有时</label></li>
					<li class="custom-control custom-radio"><input type="radio" value="${ i >= 53 && i != 57 && i != 60 && i != 65 ? '2' : '4'  }" class="custom-control-input" id="${ ids[d] + indexs }" name="radio-stacked-${ ids[d] }"><label class="custom-control-label" for="${ ids[d] + indexs++ }">经常</label></li>
					<li class="custom-control custom-radio"><input type="radio" value="${ i >= 53 && i != 57 && i != 60 && i != 65 ? '1' : '5'  }" class="custom-control-input" id="${ ids[d] + indexs }" name="radio-stacked-${ ids[d] }"><label class="custom-control-label" for="${ ids[d] + indexs++ }">总是</label></li>
				</ul>
			</section>
		`
	}

	var soltIndex = 0;

	var model = [],
		transSolt = [],
		result = '';

	function solt () {
		var soltIndex = 0;
		$('input[type="radio"]:checked').each((index, item) => {
			soltIndex += Number($(item).val());
			if (index == 7 || index == 15 || index == 15 + 7 || index == 15 + 7 + 8 || index == 15 + 14 + 8 || index == 15 + 21 + 8 || index == 15 + 28 + 8 || index == 15 + 28 + 16 || index == 15 + 35 + 16) {
				// console.log(soltIndex)
				model.push(soltIndex)
				soltIndex = 0;
			}
		})
		var a = [8,8,7,8,7,7,7,8,7],
			b = ['气虚质', '阴虚质', '阳虚质', '痰湿质', '湿热质', '血瘀质', '特禀质', '平和质', '气郁质']
		model.forEach((item, index) => {

			// 转化分数=[(原始分一条目数)/(条目数×4)]×100
			// 8 8 7 8 7 7 7 8 7

			// transSolt.push( ( (item - a[index]) / (a[index] * 4) ) * 100 )
			transSolt.push({
				'name': b[index],
				'solt': ( (item - a[index]) / (a[index] * 4) ) * 100
			})
		})
		console.log('model', model)
		console.log('transSolt', transSolt)

		if (transSolt[7].solt >= 60 ) {
			transSolt.splice(7, 1);
			console.log(transSolt)
			var fifter1 = transSolt.filter((n) => {
				console.log(n.solt)
				return n.solt > 30;
			})
			var fifter2 = transSolt.filter((n) => {
				return n.solt > 40;
			})
			console.log(fifter1, fifter2)
			if (fifter1.length === 0) {
				console.log('是平和质')
				result = '是平和质';
			} else if (fifter2.length === 0){
				var qc = []
				transSolt.forEach((item) => {
					if (item.solt >= 30 && item.solt < 40) {
						console.log('平和质, 有' + item.name + '倾向');
						qc.push(item.name)
					}
				})
				result = '平和质, 有' + qc.join('、') + '倾向'
			} else {
				fifter2.sort((a, b) => {
					return b.solt - a.solt;
				})
				var qc = []
				fifter2.forEach((item) => {
					qc.push(item.name)
				})
				result = qc.join('、');

			}
		} else {
			transSolt.splice(7, 1);
			transSolt.sort((a, b) => {
				return b.solt - a.solt;
			})
			var qc = []
			transSolt.forEach((item) => {
				qc.push(item.name)
			})
			result = qc.join('、');
		}

		$('#result').text('您的体质是：' + result);
		
		
		model = []
		transSolt = []
		result = []
	}


	for (; lenIndex < title.length; lenIndex++) {
		$('#main').append(addHtml(lenIndex, lenIndex));
		if (lenIndex == 7 || lenIndex == 15 || lenIndex == 15 + 7 || lenIndex == 15 + 7 + 8 || lenIndex == 15 + 14 + 8 || lenIndex == 15 + 21 + 8 || lenIndex == 15 + 28 + 8 || lenIndex == 15 + 28 + 16 || lenIndex == 15 + 35 + 16) {
			// debugger;
			$('#main').append('<hr />');
		}
		var d = 1;
		$('input[type="radio"]').each((index, item) => {
			if (index % 4 == 0) {
				$('input[type="radio"]').eq(~~(Math.random() * (5 * d++) + (5 * (d-1)))).attr('checked', 'checked')
			}
		})
	}

	function jisuan() {
		solt()
		// console.log(soltIndex)
	}


	
