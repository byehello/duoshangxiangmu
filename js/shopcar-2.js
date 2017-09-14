//返回顶部
	$(window).scroll(function(){

	})
	$(".return-top").click(function(){
			$("body,html").animate({scrollTop:0},1000,function(){
			})
		})
	
//二级联动
	var provArr=["p1","p2","p3"];
	var cityArr=[["c1","c2","c3"],["c4","c5","c6"],["c7","c8","c9"]];
	$(function(){
		for(var i=0 ; i<provArr.length ; i++){
			$("#prov").append("<option value="+i+">"+provArr[i]+"</option>");
		}
	})
	$("#prov").change(function(){
		$("#city")[0].length=1;//js的length属性 可以读写
		var index=$(this).val();
		if(index==""){
			return;
		}
		var _cityArr=cityArr[index];
		for(var i=0; i<_cityArr.length ;i++){
			$("#city").append("<option value="+index+"_"+i+">"+_cityArr[i]+"</option>");
		}
	})
	
//按钮点击
$("#go").click(function(){
	location.href="http://127.0.0.1/duoshangwang/goodslist.html";
})
$("#pay").click(function(){
	location.href="http://127.0.0.1/duoshangwang/shopcar-3.html";
})
