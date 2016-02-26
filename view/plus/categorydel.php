<?php 
$arr =array("status"=>0,"message"=>"删除成功","data"=>array ("id"=>$_POST["id"]));
echo json_encode($arr);
?>