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
	}
	var i="2cht";
	console.log(i);
	var str=$("code").value;
	console.log(str);
	console.log($("utel").value);
	if($("utel").value==utel && str==i){
		location.href="http://127.0.0.1/duoshangwang/login.html";
	}else{
		alert("用户名和验证码错误");
	}
}
