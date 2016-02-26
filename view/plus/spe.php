<?php 
sleep(1);
$res=array();
$get=$_POST["speval"];
foreach ($get as $item){
	array_push($res, array("key"=>mt_rand(100000,110000),"val"=>$item));
}
$arr = array("status"=>0,"message"=>"操作成功","data"=>array ('id'=>mt_rand(200000,210000),'name'=>$_POST["spe"],"spevalList"=>$res));
echo json_encode($arr);
?>
