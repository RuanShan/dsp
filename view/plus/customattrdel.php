<?php 
sleep(1);
$arr = array("status"=>0,"message"=>"删除成功","data"=>array ('attrid'=>$_POST["attrid"],"attrvalid"=>$_POST["attrvalid"]));
echo json_encode($arr);
?>
