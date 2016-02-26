<?php 
$step=$_REQUEST["step"];
if(1==$step){
	$arr = array("status"=>0,"message"=>"","url"=>"View/management/plan_all_ed.html");
}else if(2==$step){
	$arr = array("status"=>0,"message"=>"","url"=>"View/management/plan_all_ed.html");
}
echo json_encode($arr);
?>