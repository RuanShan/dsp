 <?php 
 $type=$_POST["type"];
 $page=$_POST['page'];
 if((1==$type && 1==$page)){
    $result='{
        "status":0,
        "message":"success",
        "totalPage": 2,
        "currentPage": 1,
        "data": [
            {
                "id":1316,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果6s",
                "initPrice": 7500.00,
                "promotionPrice": 9929.00,
                "stock": 110,
                "type": "旗舰店"
            },
            {
                "id":1317,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果5s",
                "initPrice": 1600.00,
                "promotionPrice": 1299.00,
                "stock": 220,
                "type": "品牌店"
            },
            {
                "id":1315,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果2s",
                "initPrice": 8600.00,
                "promotionPrice": 5129.00,
                "stock": 130,
                "type": "旗舰店"
            },
            {
                "id":1313,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果4s",
                "initPrice": 2500.00,
                "promotionPrice": 4399.00,
                "stock": 420,
                "type": "品牌店"
            },
            {
                "id":1312,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果1s",
                "initPrice": 900.00,
                "promotionPrice": 1399.00,
                "stock": 520,
                "type": "旗舰店"
            }
        ]
    }';
} else if((1==$type && 2==$page)){
    $result='{
        "status":0,
        "message":"success",
        "totalPage": 2,
        "currentPage": 2,
        "data": [
            {
                "id":13161,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果6sq",
                "initPrice": 17500.00,
                "promotionPrice": 19929.00,
                "stock": 1110,
                "type": "旗舰店"
            },
            {
                "id":13171,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果5sq",
                "initPrice": 11600.00,
                "promotionPrice": 11299.00,
                "stock": 1220,
                "type": "品牌店"
            },
            {
                "id":13151,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果2sq",
                "initPrice": 18600.00,
                "promotionPrice": 15129.00,
                "stock": 1130,
                "type": "旗舰店"
            },
            {
                "id":13131,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果4sq",
                "initPrice": 12500.00,
                "promotionPrice": 14399.00,
                "stock": 1420,
                "type": "品牌店"
            },
            {
                "id":13121,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果1sq",
                "initPrice": 1900.00,
                "promotionPrice": 11399.00,
                "stock": 1520,
                "type": "旗舰店"
            }
        ]
    }';
 }else if(2==$type){
    $result='{
        "status":0,
        "message":"success",
        "totalPage": 20,
        "currentPage": 1,
        "data": [
            {
                "id":1416,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果6s",
                "initPrice": 5900.00,
                "promotionPrice": 999.00,
                "stock": 10,
                "type": "旗舰店",
                "commission": "10%"
            },
            {
                "id":1317,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果5s",
                "initPrice": 1900.00,
                "promotionPrice": 199.00,
                "stock": 2420,
                "type": "品牌店",
                "commission": "10%"
            },
            {
                "id":1315,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果2s",
                "initPrice": 4900.00,
                "promotionPrice": 599.00,
                "stock": 1330,
                "type": "旗舰店",
                "commission": "10%"
            },
            {
                "id":1313,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果4s",
                "initPrice": 3900.00,
                "promotionPrice": 499.00,
                "stock": 4320,
                "type": "品牌店",
                "commission": "10%"
            },
            {
                "id":1312,
                "url":"http://stc.weimob.com/img/template/lib/home-150150.jpg",
                "name":"苹果1s",
                "initPrice": 2900.00,
                "promotionPrice": 399.00,
                "stock": 5301,
                "type": "旗舰店",
                "commission": "10%"
            }
        ]
    }';
 }else if(3==$type){
    $result='{
        "status":0,
        "message":"没有找到相应的数据!",
        "totalPage": 1,
        "currentPage": 1,
        "data": []
    }';
 }
 
echo $result;
?>