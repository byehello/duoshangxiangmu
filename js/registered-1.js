function $(id){
	return document.getElementById(id);
}
var flagTel=null;
$("utel").onblur=function(){
	var reg=/^1\d{10}$/;
	var str=$("utel").value;
	if(reg.test(str)){
		$("s1").innerHTML="通过信息验证";
		$("s1").style.color="green";
		flagTel=true;
	}else{
		$("s1").innerHTML="请填写正确的手机号码或者电子邮箱！";
		$("s1").style.color="red";
		flagTel=false;
	}
}
var flagUpwd=null;
$("upwd").onblur=function(){
	var reg=/^\w{8,20}$/;
	var str=$("upwd").value;
	if(reg.test(str)){
		$("s2").innerHTML="通过信息验证";
		$("s2").style.color="green";
		flagUpwd=true;
	}else{
		$("s2").innerHTML="密码只能由8-20个字母、数字、或符号组成";
		$("s2").style.color="red";
		flagUpwd=false;
	}
}
var flagCode=null;
$("code").onblur=function(){
	var i="2cht";
	//console.log(i);
	var str=$("code").value;
	//console.log(str);
	if(str==i){
		$("s3").innerHTML="通过信息验证";
		$("s3").style.color="green";
		flagCode=true;
	}else{
		$("s3").innerHTML="验证码填写错误";
		$("s3").style.color="red";
		flagCode=false;
	}
}
function checkForm(){
	if(flagTel&&flagUpwd&&flagCode){
		return true;
	}else{
		return false;
	}
}
$("btn").onclick=function(){
	var now = new Date();
		now.setDate(now.getDate()+2);
		document.cookie="utel="+$("utel").value+";expires="+now;
		document.cookie="upwd="+$("upwd").value;
}
