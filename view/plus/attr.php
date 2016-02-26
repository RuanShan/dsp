<?php 
sleep(1);
$arr =array("status"=>0,"message"=>"添加成功","data"=>array ('attrname'=>$_POST["attrname"],"attrid"=>mt_rand(100000,110000),"attrvalid"=>mt_rand(130000,140000),"attrvalname"=>$_POST["attrvalname"]));
echo json_encode($arr);
?>
