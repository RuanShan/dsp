<?php 
$arr =array("status"=>0,"message"=>"添加成功","data"=>array ('name'=>$_POST["name"],"id"=>$_POST["id"]));
echo json_encode($arr);
?>