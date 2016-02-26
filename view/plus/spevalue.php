<?php 
sleep(1);
$res=array();
$get=$_POST["speval"];
foreach ($get as $item){
	array_push($res, array("key"=>mt_rand(100000,110000),"val"=>$item));
}
$arr = array("status"=>0,"message"=>"操作成功","data"=>array ('speid'=>$_POST["speid"],"spevalList"=>$res));
echo json_encode($arr);
?>

