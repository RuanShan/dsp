<?php 
$step=$_REQUEST["step"];
if(1==$step){
    $arr = array("status"=>0,"message"=>"","url"=>"View/coupon/event_ed2.html");
}else if(2==$step){
    $arr = array("status"=>0,"message"=>"创建活动成功","url"=>null);
}
echo json_encode($arr);
?>