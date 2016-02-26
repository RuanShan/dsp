<?php 
sleep(1);
$res=array();
$get=$_POST["idarr"];
foreach ($get as $item){
	array_push($res, $item);
}
$arr = array("status"=>0,"message"=>"删除成功","data"=>array ('speid'=>$_POST["speid"],"spevalidList"=>$res));
echo json_encode($arr);
?>
