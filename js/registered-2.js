function $(id){
	return document.getElementById(id);
}
var flagName=null;
$("uname").onblur=function(){
	var reg=/^\w{8,15}$/;
	var str=$("uname").value;
	if(reg.test(str)){
		$("s1").innerHTML="通过信息验证";
		$("s1").style.color="green";
		flagName=true;
	}else{
		$("s1").innerHTML="用户名只能由8-15个字母、数字、或符号组成";
		$("s1").style.color="red";
		flagName=false;
	}
}
var flagEmail=null;
$("uemail").onblur=function(){
	var reg=/^\w+@\w+$/;
	var str=$("uemail").value;
	if(reg.test(str)){
		$("s2").innerHTML="通过信息验证";
		$("s2").style.color="green";
		flagEmail=true;
	}else{
		$("s2").innerHTML="请填写邮箱地址";
		$("s2").style.color="red";
		flagEmail=false;
	}
}
//var flagShenfen=null;
//var sf=document.getElementsByName("shenfen");
//var sstr="";
//	var count=0;
//	for(var i=0; i<sf.length ; i++){
//		if(sf[i].checked){
//			count++;
////			$("s3").innerHTML="sf[i].value";
////			$("s3").style.color="green";
//			flagShenfen=true;
//		}
//		if(count<1){
//			$("s3").innerHTML="请选择您的身份";
//			flagShenfen=false;
//		}
//	}
//function checkForm(){
//	if(flagName&&flagEmail){
//		return true;
//	}else{
//		return false;
//	}
//}
$("btn").onclick=function(){
	var now = new Date();
		now.setDate(now.getDate()+2);
		document.cookie="uname="+$("uname").value+";expires="+now;
		document.cookie="uemail="+$("uemail").value;
}
