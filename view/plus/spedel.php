<?php 
sleep(1);
$arr = array("status"=>0,"message"=>"删除成功","data"=>array ('speid'=>$_POST["speid"]));
echo json_encode($arr);
?>
