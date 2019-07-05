function Rad(d) {
    return d * Math.PI / 180.0// 经纬度转换成三角函数中度分表形式。
}
export function distance(lat1, lng1, lat2, lng2) {// 传入两个点的经纬度
    var radLat1 = Rad(lat1)
    var radLat2 = Rad(lat2)
    var a = radLat1 - radLat2
    var b = Rad(lng1) - Rad(lng2)
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
    s = s * 6378.137// EARTH_RADIUS;
    s = Math.round(s * 10000) /10000 // 输出为米
    s = s.toFixed(4)// 保留小数点后两位小数
    return s
}
