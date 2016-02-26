<?php 
 $name=$_GET["name"];

 if('demo'==$name){
    $result='{
	    "status": 1,
	    "message": "抱歉，当前类目下已存在该属性，不可再添加！"
	}';
 } else if('test'==$name){
    $result='{
	    "status": 2,
	    "message": "抱歉，当前属性下已存在该属性值，不可再添加！"
	}';
 } else {
 	$result='{
	    "status": 0,
	    "message": ""
	}';
 }
 
echo $result;
?>