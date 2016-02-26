<?php 
sleep(1);
$type=$_REQUEST["type"];
if("putaway"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"label":["满100减10"],
					"price":42.00,
					"store":0
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"label":["满100减10"],
					"price":42.00,
					"store":0
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"label":["满100减10"],
					"price":42.00,
					"store":660
				}
			]
		}
	}';
	
}else if("soldout"==$type){
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
					"label":["满100减10"],
					"price":42.00,
					"store":660
				},{
					"id":"s22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"label":["满100减10"],
					"price":42.00,
					"store":660
				},{
					"id":"s32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"label":["满100减10"],
					"price":42.00,
					"store":660
				}
			]
		}
	}';
}else if("all"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"price":42.00,
					"store":3,
					"msg":""
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"price":42.00,
					"store":3,
					"msg":""
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"price":42.00,
					"store":3,
					"msg":""
				},{
					"id":"32346",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"price":42.00,
					"store":3,
					"msg":"商品库存太少"
				}
			]
		}
	}';
	
}else if("newest"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"price":42.00,
					"status":1
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"price":42.00,
					"status":1
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"price":42.00,
					"status":1
				},{
					"id":"32346",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"price":42.00,
					"status":0
				}
			]
		}
	}';
	
}else if("selected"==$type){
	$s='{
	  "status":0,
	  "message":"",
	  "data":{
		  "count":800,
		  "currentPage":1,
		  "totalPage":89,
		  "data":[
				{
					"id":"12345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋",
					"price":42.00,
					"msg":""
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"price":42.00,
					"msg":""
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
					"label":["满100减10"],
					"price":42.00,
					"store":660
				},{
					"id":"22345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋2",
					"label":["满100减10"],
					"price":42.00,
					"store":660
				},{
					"id":"32345",
					"img":"/Assets/images/avatar12.jpg",
					"name":"新疆吐鲁番 葡萄干 甜过初恋3",
					"label":["满100减10"],
					"price":42.00,
					"store":660
				}
			]
		}
	}';
}

echo $s;

?>

