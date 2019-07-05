
export function timeAgo(stringTime) {
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let week = day * 7
    let month = day * 30
    let time1 = new Date().getTime()//当前的时间戳
    // let time2 = Date.parse(new Date(stringTime))//指定时间的时间戳
    let time = time1 - stringTime*1000

    let result = null
    if (time < 0) {
        // alert('设置的时间不能早于当前时间！')
        return result = '刚刚'
    } else if (time / month >= 1) {
        return result = parseInt(time / month) + '月前'
    } else if (time / week >= 1) {
        return result = parseInt(time / week) + '周前'
    } else if (time / day >= 1) {
        return result = parseInt(time / day) + '天前'
    } else if (time / hour >= 1) {
        return result = parseInt(time / hour) + '小时前'
    } else if (time / minute >= 1) {
        return result = parseInt(time / minute) + '分钟前'
    } else {
        return result = '刚刚发布'
    }
}