<?php
	$name = $_GET['shopname'];

	if ($name != '正品小店') {
		$s = '{
			"status": 0,
			"message": "成zz功"
		}';
	} else {
		$s = '{
			"status": 1,
			"message": "用户名已使用"
		}';
	}

	echo $s;
?>