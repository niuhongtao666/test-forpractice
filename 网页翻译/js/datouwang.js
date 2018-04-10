/* DaTouWang URL: www.datouwang.com */
(function(){
	/*变量定义部分*/
	var type = document.getElementsByClassName('lang-panel')[0].children;//获取语言类型标签
	var result = document.getElementsByClassName('result')[0];//获取语言选择后的结果标签
	// var input = document.getElementsByClassName('input')[0],//获取输入内容标签
	var output = document.getElementsByClassName('output')[0];//获取输出结果标签
	var con1=$('#con').text();
	console.log(con1);
	var pro=$('#province').text();
	console.log(con);
	var con=[con1,pro];
	var transBtn = document.getElementsByClassName('transbtn')[0];//获取翻译按钮
	var lang = "en",//语言类型
		timer = null,//定时器
		len = type.length;//语言类型标签的长度
	function createScript(src){
		//创建一个script标签
		var script = document.createElement('script');
		//添加src和id属性
		script.id = 'urlData';
		script.src = src;
		//将script标签添加到body页面中
		document.body.appendChild(script);
	}
	function changeType(){
		//获取到属性data-type,此时this指向获取的语言类型标签
		lang = this.getAttribute('data-type');
		//然后将语言类型值赋值给结果标签
		result.innerHTML = this.innerHTML;
	}

	function translate(){
        var con1=$('#con').text();
        console.log(con1);
        var pro=$('#province').text();
        console.log(con);
        var con=[con1,pro];
        console.log(con);
		for(var i=0;i<con.length;i++) {
            //获取接口
            var value = 'http://api.fanyi.baidu.com/api/trans/vip/translate?';
            //获取当前时间
            var date = Date.now();
            //此处拼接接口数据,好转换成jsonp数据格式,实现跨域访问
            var str = '20170605000052254' + con[i] + date + '63r1c42X7_buc4OrXm1g';
            console.log(str);
            //使用加密算法计算数据
            var md5 = MD5(str);
            //然后得到的数据
            var data = 'q=' + con[i] + '&from=auto&to=' + lang + '&appid=20170605000052254' + '&salt=' + date + '&sign=' + md5 + "&callback=callbackName";
            //引入src路径
            var src = value + data;
            //调用创建script标签函数
            createScript(src);
        }
	}
	function init(){
		//循环添加点击事件
		for(var i = 0;i < len;i++){
			//点击时间就是改变语言类型
			type[i].onclick = changeType;
		}
		transBtn.onclick = function(){
			//如果输入内容为空则返回
			if(con == []){
				return;
			}
			//获取创建的script标签
			var s = document.getElementById('urlData');
			//如果script标签已经存在删除了重新创建
			if(s){
				s.parentNode.removeChild(s);
				translate();
			}else{
				translate();
			}
		}

	}
	init();
})();
//回调函数定义
function callbackName(str){
    var con1=$('#con').text();
    var pro=$('#province').text();
    var con=[con1,pro];
	console.log(str);
	console.log(con);
	for(var i=0;i<con.length;i++){
		if(con[i]==str.trans_result[0].src){
			console.log(con[i]);
			if(con[i]==con1){
				console.log(str.trans_result[0].src);
                $('#con').text(str.trans_result[0].dst);
			}else if(con[i]==pro){
                $('#province').text(str.trans_result[0].dst);
			}
		};
	}
}