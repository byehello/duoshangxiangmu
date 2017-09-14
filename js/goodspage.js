//返回顶部
	$(window).scroll(function(){

	})
	$(".return-top").click(function(){
			$("body,html").animate({scrollTop:0},1000,function(){
			})
		})
	
// 放大镜
$(".bottom li").bind("mouseenter",function(){
	var index=$(this).index();
	$(".small img").eq(index).show().siblings("img").hide();
	$(".big img").eq(index).show().siblings().hide();
})
$(".small").on({
	mouseenter:function(){	
		$(".big").show();
		$(".mask").show();
	},
	mouseleave:function(){
		$(".big").hide();
		$(".mask").hide();
	},
	mousemove:function(e){
		var e=e||event;
		var x=e.pageX-$(".box").offset().left-$(".mask").width()/2;
		var y=e.pageY-$(".box").offset().top-$(".mask").height()/2;
		var maxL=$(".box").width()-$(".mask").width();
		var maxT=$(".box").height()-$(".mask").height();
		x=Math.min(maxL,Math.max(0,x));
		y=Math.min(maxT,Math.max(0,y));
		$(".mask").css({
			left:x,
			top:y,
		})
		var bigImgX=x*$(".bigImages").eq(0).width()/$(".box").width();
		var bigImgY=y*$(".bigImages").eq(0).height()/$(".box").height();
		$(".bigImages").css({
			left:-bigImgX,
			top:-bigImgY
		})
	}
})
//立即下单
$("#xiadan").on("click",function(){
	var arr=[];
	var flag=true;
	var _json={
		name:$(this).data("name"),
		src:$(this).data("src"),
		price:$(this).data("price"),
		count:1
	}
	var cookieInfo=getCookie("new");
	if(cookieInfo.length != 0){
		arr=cookieInfo;
	}
	if(flag){
		arr.push(_json);
	}
	setCookie("new",JSON.stringify(arr));
	var f=confirm("是否去结算？")
	if(f){		
		location.href="http://127.0.0.1/duoshangwang/shopcar-1.html";
	}
	console.log( document.cookie)
	console.log(arr);
})
