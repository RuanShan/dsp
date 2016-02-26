<?php 
$id=$_POST['aid'];
$total = $_POST['total'];

if($id != "" && $total < 3000.00){
	$s='{
		"status":0,
		"message":"账户的余额充足",
		"url":"",
		"callback":""
	}';
}else{
	$s='{
		"status":1,
		"message":"您推广账户的余额不足",
		"url":"",
		"callback":""
	}';
}

echo $s;

?>