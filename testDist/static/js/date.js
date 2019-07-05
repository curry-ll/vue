/* 时间戳转换成日期时间2014-8-8 下午11：40：20 */

export function formatDate (ns) {
  return new Date(parseInt(ns) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
}
/* 时间戳转换成八位日期2014-5-5 */
export function userDate (uData) {
  var myDate = new Date(uData * 1000)
  var year = myDate.getFullYear()
  var month = myDate.getMonth() + 1
  var day = myDate.getDate()
  return year + '-' + month + '-' + day
}

/* 时间戳转换成四位时间10:10  */
export function userTime (uTime) {
  var myDate = new Date(uTime * 1000)
  var hours = myDate.getHours()
  var minutes = myDate.getMinutes()
  return hours + ':' + minutes
}

/* 时间戳转换成四位时间10:10:00 */
export function userTime1 (uTime) {
  var myDate = new Date(uTime * 1000)
  var hours = myDate.getHours()
  var minutes = myDate.getMinutes()
  var second = myDate.getSeconds()
  return hours + ':' + minutes + ':' + second
}

/* 定时提醒设置的时间传入 (2014,05,15)返回成2014-01-21 */
export function setDate (year, month, day) {
  return year + '-' + month + '-' + day
}
/* 定时提醒设置的时间传入 (01：02)返回成01:01:00 */
export function setTime (hour, minute) {
  return hour + ':' + minute + ':00'
}

/* 时间格式2014-02-02 14:10:00改成时间戳 */
export function jsstrtotime (strtime) {
  var newstr = strtime.replace(/:/g, '-')
  newstr = newstr.replace(/ /g, '-')
  var arr = newstr.split('-')
  var datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]))
  var strtotime = null
  strtotime = datum.getTime() / 1000
  return strtotime
}
/* 时间戳改成时间格式2014-12-12 下午01：10 */
export function jsdatetime (unixtime) {
  var timestr = new Date(parseInt(unixtime) * 1000)
  var datetime = timestr.toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
  return datetime
}
/* 时间戳改成时间格式2014-12-12 14：10 : 00 */
export function getLocalTime (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
}
export function nowTimes (timeStamp) {
  var date = new Date();
    date.setTime(timeStamp);
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return h+':'+minute+':'+second;
}
export function formatTime (timeStamp) {
  var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}
export function messageTime (timeStamp) {
  var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return m + '-' + d+' '+h+':'+minute;
}