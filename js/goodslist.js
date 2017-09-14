//返回顶部
	$(window).scroll(function(){

	})
	$(".return-top").click(function(){
			$("body,html").animate({scrollTop:0},1000,function(){
			})
		})
//轮播背景 
var timer=setInterval(autoPlay,3000);
var index=0;
function autoPlay(){
	index++;
	if(index==$("header ol li").size()){
		index=0;
	}
	$("header ol li").eq(index).addClass("active").siblings().removeClass("active");
	$("header").css("background-image","url(img/goodslist_files/header"+(index+1)+".jpg)");
}
$("header ol li").mouseenter(function(){
	clearInterval(timer);
	index=$(this).index()-1;
	autoPlay();
})
$("header ol li").mouseleave(function(){
	timer=setInterval(autoPlay,3000);
})
	//ajax请求
//list1
$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/duoshangwang/goodslist.json",
		success:function(res){
			var html="";
			for(var i in res.list1){
					html +=`<li>
							<a href="http://127.0.0.1/duoshangwang/goodspage.html">
								<img src="img/goodslist_files/${res.list1[i].src}">
								<p>${res.list1[i].name}</p>
								<p>${res.list1[i].price}</p>
							</a>
							<span data-src=${res.list1[i].src} data-name=${res.list1[i].name} data-price=${res.list1[i].price} ></span>
							<button>立即上架</button>
						</li>`;
			}
			$(".new ul").html(html);
		}
	});
})
$(".new").on("click","button",function(){
	var arr=[];
	var flag=true;
	var _json={
		name:$(this).prev().data("name"),
		src:$(this).prev().data("src"),
		price:$(this).prev().data("price"),
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
	//console.log(arr);
})
//list2
$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/duoshangwang/goodslist.json",
		success:function(res){
			var html="";
			for(var i in res.list2){
					html +=`<li>
							<a href="http://127.0.0.1/duoshangwang/goodspage.html">
								<img src="img/goodslist_files/${res.list2[i].src}">
								<p>${res.list2[i].name}</p>
								<p>${res.list2[i].price}</p>
							</a>
							<span data-src=${res.list2[i].src} data-name=${res.list2[i].name} data-price=${res.list2[i].price} ></span>
							<button>立即上架</button>
						</li>`;
			}
			$(".dress ul").html(html);
		}
	});
})
$(".dress").on("click","button",function(){
	var arr=[];
	var flag=true;
	var _json={
		name:$(this).prev().data("name"),
		src:$(this).prev().data("src"),
		price:$(this).prev().data("price"),
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
//list3
$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/duoshangwang/goodslist.json",
		success:function(res){
			var html="";
			for(var i in res.list3){
					html +=`<li>
							<a href="http://127.0.0.1/duoshangwang/goodspage.html">
								<img src="img/goodslist_files/${res.list3[i].src}">
								<p>${res.list3[i].name}</p>
								<p>${res.list3[i].price}</p>
							</a>
							<span data-src=${res.list3[i].src} data-name=${res.list3[i].name} data-price=${res.list3[i].price} ></span>
							<button>立即上架</button>
						</li>`;
			}
			$(".coat ul").html(html);
		}
	});
})
$(".coat").on("click","button",function(){
	var arr=[];
	var flag=true;
	var _json={
		name:$(this).prev().data("name"),
		src:$(this).prev().data("src"),
		price:$(this).prev().data("price"),
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
//list4
$(function(){
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/duoshangwang/goodslist.json",
		success:function(res){
			var html="";
			for(var i in res.list4){
					html +=`<li>
							<a href="http://127.0.0.1/duoshangwang/goodspage.html">
								<img src="img/goodslist_files/${res.list4[i].src}">
								<p>${res.list4[i].name}</p>
								<p>${res.list4[i].price}</p>
							</a>
							<span data-src=${res.list4[i].src} data-name=${res.list4[i].name} data-price=${res.list4[i].price} ></span>
							<button>立即上架</button>
						</li>`;
			}
			$(".bottoms ul").html(html);
		}
	});
})
$(".bottoms").on("click","button",function(){
	var arr=[];
	var flag=true;
	var _json={
		name:$(this).prev().data("name"),
		src:$(this).prev().data("src"),
		price:$(this).prev().data("price"),
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