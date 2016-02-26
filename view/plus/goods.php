<?php 
$type=$_REQUEST["type"];
if("label"==$type){
	$result=json_encode(array ('value'=>$_POST["Name"],"key"=>mt_rand(100000,110000)));
	$arr = array("status"=>0,"message"=>"添加成功","callback"=>"window.updateLabel($result)");
}else if("group"==$type){
	$result1=json_encode(array ("groupId"=>$_POST["group"],"value"=>$_POST["groupname"],"key"=>mt_rand(10000,11000)));
	$arr = array("status"=>0,"message"=>"添加成功","callback"=>"window.updateGroup($result1)");
}else if("phone"==$type){
	$arr = array("status"=>0,"message"=>"添加成功","callback"=>"window.bangdingPhone({phone:'13888888888'})");
}else{
	$arr = array("status"=>0,"message"=>"添加成功","callback"=>"window.updateAddress({key:1231312,value:'宋玉杰,1872231921,XZXXXX'})");
}


echo json_encode($arr);
?>

