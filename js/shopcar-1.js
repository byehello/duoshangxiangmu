//返回顶部
	$(window).scroll(function(){

	})
	$(".return-top").click(function(){
			$("body,html").animate({scrollTop:0},1000,function(){
			})
		})
	
//进入购物车 
$(function(){
	var arr=getCookie("new");
	var html="";
	for(var i in arr){
		var goodsInfo=arr[i];
		html += `<ul>
					<li class="goods"><img src="img/goodslist_files/${goodsInfo.src}"></li>
					<li class="goods">${goodsInfo.name}</li>
					<li class="goods">${goodsInfo.price}</li>
					<li class="goods count" data-src="${goodsInfo.src}" data-name="${goodsInfo.name}" data-price="${goodsInfo.price}">
						<span class="updateCount" data-number="-1">-</span>
						<span class="goods-count">${goodsInfo.count}</span>
						<span class="updateCount" data-number="1">+</span>
					</li>
					<li class="goods sumPrice">${goodsInfo.count * goodsInfo.price}</li>
					<i>删除</i></li>
				</ul>`;
	}
	$(".shoplist").html(html);
	console.log(arr);
	//删除
	$(".shoplist").on("click","i",function(){
		var src=$(this).parent().find(".count").data("src");
		var pname=$(this).parent().find(".count").data("name");
		for(var i in arr){
			if(src==arr[i].src && pname==arr[i].name){
				arr.splice(i,1);
				setCookie("new",JSON.stringify(arr));
				$(this).parent().remove();
			}
		}
	})
	//加减操作
	$(".updateCount").click(function(){
		var sign=$(this).html();
		var src=$(this).parent().data("src");
		var pname=$(this).parent().data("name");
		var num=$(this).parent().find(".goods-count").html();
		if(sign=="-" && num==1){
			return;
		}
		for(var i in arr){
			if(src==arr[i].src && pname==arr[i].name){
				sign=="+"?arr[i].count++ : arr[i].count--;
				setCookie("new",JSON.stringify(arr));
				$(this).parent().find(".goods-count").html(arr[i].count);
				$(this).parent().parent().find(".sumPrice").html(arr[i].count * arr[i].price);
			}
		}
		jiesuan();
	})
	//结算
	function jiesuan(){
		var money=0;
		$(".sumPrice").each(function(){
			money += parseInt($(this).html());
		})
		$(".money2").html(money);
	}
	jiesuan();
})
$(".anniu").click(function(){
	location.href="http://127.0.0.1/duoshangwang/shopcar-2.html";
})
