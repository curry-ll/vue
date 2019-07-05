
export function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function () {
            return {lng: position.coords.latitude,lat: position.coords.longitude}
        }, function () {
            switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("您拒绝对获取地理位置的请求");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("位置信息是不可用的");
            break;
        case error.TIMEOUT:
            alert("请求您的地理位置超时");
            break;
        case error.UNKNOWN_ERROR:
            alert("未知错误");
            break;
    }
        });
    } else {
        alert("您的浏览器不支持使用地理位置服务");
    }
}