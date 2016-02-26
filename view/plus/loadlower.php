<?php 
$type=$_REQUEST["type"];
if($type==1){
    $s='{
        "status":0,
        "message":"",
        "total_count": 478845,
        "page_num":30,
        "incomplete_results": false,
        "items": [
            {
              "id": 1,
              "value": "供货商"
            },
            {
              "id": "a",
              "value": "分销商AAA"
            },
            {
              "id": "b",
              "value": "分销商BBB"
            },
            {
              "id": "c",
              "value": "分销商CCCC"
            },
            {
              "id": 2407161,
              "value": "分销商ddd"
            },
            {
              "id": 2407162,
              "value": "分销商eee"
            },
            {
              "id": 2407163,
              "value": "分销商fff"
            },
            {
              "id": 2407164,
              "value": "分销商ggg"
            },
            {
              "id": 2407165,
              "value": "分销商hhh"
            }
        ]
    }';
}else if($type==2){
    $s='{
        "status":0,
        "message":"",
        "total_count": 478845,
        "page_num":30,
        "incomplete_results": false,
        "items": [
            {
              "id": "a",
              "value": "分销商A"
            },
            {
              "id": 2407158,
              "value": "分销商B"
            },
            {
              "id": 2407159,
              "value": "分销商C"
            },
            {
              "id": 2407161,
              "value": "分销商d"
            },
            {
              "id": 2407162,
              "value": "分销商e"
            },
            {
              "id": 2407163,
              "value": "分销商f"
            },
            {
              "id": 2407164,
              "value": "分销商g"
            },
            {
              "id": 2407165,
              "value": "分销商h"
            }
        ]
    }';
}else if($type==3){
    $pid=$_REQUEST["pid"];
    if($pid==1){
        $s='{
        "status":0,
        "message":"",
        "total_count": 0,
        "page_num":30,
        "incomplete_results": true,
        "items": [
            
        ]
    }';
    }else{
       $s='{
        "status":0,
        "message":"",
        "total_count": 478845,
        "page_num":30,
        "incomplete_results": false,
        "items": [
            {
              "id": "a",
              "value": "销售员A"
            },
            {
              "id": 2407158,
              "value": "销售员B"
            },
            {
              "id": 2407159,
              "value": "销售员C"
            },
            {
              "id": 2407161,
              "value": "销售员d"
            },
            {
              "id": 2407162,
              "value": "销售员e"
            },
            {
              "id": 2407163,
              "value": "销售员f"
            },
            {
              "id": 2407164,
              "value": "销售员g"
            },
            {
              "id": 2407165,
              "value": "销售员h"
            }
        ]
    }'; 
    }
   
}else if($type==4){
   $s='{
        "status":0,
        "message":"",
        "total_count": 478845,
        "page_num":30,
        "incomplete_results": false,
        "items": [
            {
              "id": "a",
              "value": "微客A"
            },
            {
              "id": 2407158,
              "value": "微客B"
            },
            {
              "id": 2407159,
              "value": "微客C"
            },
            {
              "id": 2407161,
              "value": "微客d"
            },
            {
              "id": 2407162,
              "value": "微客e"
            },
            {
              "id": 2407163,
              "value": "微客f"
            },
            {
              "id": 2407164,
              "value": "微客g"
            },
            {
              "id": 2407165,
              "value": "微客h"
            }
        ]
    }';
}
echo $s;
?>