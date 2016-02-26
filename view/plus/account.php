<?php 
$id=$_POST['aid'];
if($id!=""){
	$s='{
		"status":0,
		"message":"保存成功",
		"url":"",
		"callback":"window.clearId()"
	}';
}else{
	$s='{
		"status":0,
		"message":"",
		"url":"",
		"callback":"window.multyInvestGames({status:1,message:\'帐号或密码信息错误\',data:[{id:1,image:\'/Assets/images/info_logo.png\',nickname:\'bbbb\'},{id:2,image:\'/Assets/images/info_logo.png\',nickname:\'cccc\'}]})"
	}';
}

echo $s;

?>