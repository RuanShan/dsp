<?php 
sleep(1);
$type=$_REQUEST["type"];
if("all"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":801,
		  "currentPage":2,
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
					"store":233,
					"move":"未搬家" 
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":231,
					"move":"未搬家" 
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660,
					"move":"已搬过" 
				},{
					"id":"32348",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋4",
					"classes":"舞蹈>古典舞",
					"price":428.00,
					"sales":22,
					"store":660,
					"move":"已搬过" 
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
					"store":660,
					"move":"已搬过" 
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660,
					"move":"未搬家" 
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"classes":"舞蹈>古典舞",
					"price":42.00,
					"sales":22,
					"store":660,
					"move":"未搬家" 
				},{
					"id":"32348",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋4",
					"classes":"舞蹈>古典舞1",
					"price":492.00,
					"sales":22,
					"store":660,
					"move":"已搬过" 
				}
			]
		}
	}';
}

echo $s;

?>

