<?php 
sleep(1);
$arr = array("status"=>0,"message"=>"操作成功","data"=>array ('attrid'=>$_POST["attrid"],"attrvalid"=>mt_rand(130000,140000),"title"=>$_POST["attrval"]));
echo json_encode($arr);
?>
