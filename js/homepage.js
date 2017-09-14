//返回顶部
	$(window).scroll(function(){

	})
	$(".return-top").click(function(){
			$("body,html").animate({scrollTop:0},1000,function(){
			})
		})
//大轮播图
var timer = setInterval(autoPlay,2000);
var index = 0;
function autoPlay(){
		index ++ ;
		if(index == $(".biglunbo ul li").size()){
		index = 0;
		}
		$(".biglunbo ol li").eq( index ).addClass("active").siblings().removeClass("active");
		$(".biglunbo ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}			
		$(".biglunbo ol li").mouseover(function(){
		clearInterval( timer );
		index = $(this).index() - 1;
		autoPlay();
			})
		$(".biglunbo ol li").mouseout(function(){
		timer = setInterval(autoPlay,2000);
		})
		
//小轮播图
var timer1 = setInterval(autoPlay1,2000);
var index1 = 0;
function autoPlay1(){
		index1 ++ ;
		if(index1 == $(".smalllunbo ul li").size()){
			index1 = 0;
			}
		$(".smalllunbo ol li").eq( index1 ).addClass("active1").siblings().removeClass("active1");
		$(".smalllunbo ul li").eq(index1).fadeIn(1000).siblings().fadeOut(1000);
	}
		$(".smalllunbo ol li").mouseover(function(){
				clearInterval( timer1 );
				index1 = $(this).index() - 1;
				autoPlay1();
			})
		$(".smalllunbo ol li").mouseout(function(){
				timer1 = setInterval(autoPlay1,2000);
			})

//personal 选项卡
$(".tab li").mouseover(function(){
		$(this).siblings("li").removeClass("active2");
		$(this).addClass("active2");
 		$(".main").eq($(".tab-item").index($(this))).addClass("selected");
		$(".main").eq($(".tab-item").index($(this))).siblings("ul").removeClass("selected");
	 })

//floot left运动
$(".left>div ul").mouseenter(function(){
	$(this).css({"width":215,"height":72,"z-index":3})
	$(this).children().css({"float":"left"})
	$(this).next().css({"opacity":.1})
}).mouseleave(function(){
	$(this).css({"width":90,"height":145})
	$(this).next().css({"opacity":1})
})

//dy hua轮播
	var timer2 = setInterval(autoPlay2 , 2000);
    var index2 = 0;
    function autoPlay2(){
     	index2 ++;
     	if(index2 == 5){
     		index2 = 0;
     	}
     	$(".hua ol li").eq(index2).addClass("active3").siblings().removeClass("active3");
     	$(".hua ul li").eq(index2).animate({"left":0},1500,function(){
     		$(this).css("z-index",0).siblings().css({"z-index":1,"left":343})
     	})
    }
//收起友情链接
$(".link p").click(function(){
	$(".yl").slideToggle(1000)
})

//下拉菜单
$(".navlist>li").mouseenter(function(){
	$(this).find("ul").css("display","block");
}).mouseleave(function(){
	$(this).find("ul").css("display","none");
})
				
