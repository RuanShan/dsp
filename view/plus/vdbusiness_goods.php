<?php 
sleep(1);
$type=$_REQUEST["type"];
if("all"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "isAllSel": true,
		  "data":[
				{
					"id":"12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":233
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":231
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660
				}
			]
		}
	}';
	
}else{
	$s='{
		"status":0,
	   	"message":"",
	   	"data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"s12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660
				}
			]
		}
	}';
}

echo $s;

?>

