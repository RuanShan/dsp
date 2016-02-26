<?php 
sleep(1);
$id=$_POST['val'];
if($id=="admin"){
	$s='{
		"status":1,
		"message":"检测到敏感词‘admin’"
	}';
}else{
	$s='{
		"status":0,
		"message":"无敏感词"
	}';
}

echo $s;

?>