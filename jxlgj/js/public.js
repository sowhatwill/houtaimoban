/**
 * Created by 王立乾 on 2017/5/14.
 */
apiUrl = "https://api.dysceapp.com/znyx";
adUrl = "https://api.dysceapp.com/znyx/Ad";

/*
 * 将二维数组转化为一维数组或字符串
 * */
function arrChange(arr, key) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][key])
    }
    return newArr;
}
//时间戳转化
function nowDate(time) {
    var now = new Date(time * 1000);
    var year = now.getYear() - 100;
    var month = now.getMonth() + 1;
    var date = now.getDate();
    return year + "-" + month + "-" + date;
}