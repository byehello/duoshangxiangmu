function $(id){
	return document.getElementById(id);
}
$("btn").onclick=function(){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0 ; i<arr.length ; i++){
		var item=arr[i].split("=");
		if(item[0]=="utel"){
			utel=item[1];
		}
		if(item[0]=="upwd"){
			upwd=item[1];
		}
	}
	if($("txt").value==utel && $("pwd").value==upwd){
		location.href="http://127.0.0.1/duoshangwang/goodslist.html";
	}else{
		alert("用户名和密码错误");
	}
}
