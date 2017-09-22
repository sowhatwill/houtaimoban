/**
 * Created by 王立乾 on 2017/4/5.
 */
//导航条变化,变化导航条的文字

//添加管理员的名字，右上角
$('#adminName').text(sessionStorage.adminName);

$('.d1').click(function () {
    //第一个的文字
    sessionStorage.d1 = $(this).text();
});
$('.d2').click(function () {
    //第二个的文字
    sessionStorage.d2 = $(this).text();
    //在点击内目录的时候，跳转并导航条文字变化
    var htmlPage = $(this).attr('href');
    $('#d1').text(sessionStorage.d1);
    $('#d2').text(sessionStorage.d2);
    sessionStorage.page = 1;

    //在每次页面变化的时候，都要验证一下登录状态
    // $.ajax({
    //     url: apiUrl + "/admin/adminStatus",
    //     type: "get",
    //     dataType: 'json',
    //     data: {},
    //     success: function (res) {
    //         if (res.status != 1) {
    //             layer.msg('您还未登录,请先登录！',
    //                 {icon: 2},
    //                 function () {
    //                     window.location.href = '../login.html';
    //                 });
    //         } else {
    //             sessionStorage.htmlPage = htmlPage;
    //         }
    //     },
    //     error: function (err) {
    //         console.log(err);
    //     }
    // });
});

//iframe变化
//在初始状态下和刷新情况下主动触发
$.ajax({
    url: apiUrl + "/admin/adminStatus",
    type: "get",
    dataType: 'json',
    data: {},
    success: function (res) {
        if (res.status != 1) {
            //验证是否登录，未登录跳转到登录界面
            layer.msg('请先登录！',
                {icon: 2},
                function () {
                    window.location.href = '../login.html';
                });
        } else {
            //假如sessionStorage.htmlPage存在，在页面刷新的时候，会显示刷新前的页面
            if (sessionStorage.htmlPage != undefined) {
                $("#menuFrame").attr("src", sessionStorage.htmlPage);
                //导航条
                $('#d1').text(sessionStorage.d1);
                $('#d2').text(sessionStorage.d2);
            } else {
                //在sessionStorage.htmlPage不存在的时候，显示指定界面
                sessionStorage.htmlPage = 'welcome.html';
                //导航条,第一次设置为空
                sessionStorage.d1 = '';
                sessionStorage.d2 = '';
                $('#d1').text(sessionStorage.d1);
                $('#d2').text(sessionStorage.d2);
                $("#menuFrame").attr("src", sessionStorage.htmlPage);
            }
        }
    },
    error: function (err) {
        console.log(err);
    }
});
//退出按钮

$('.logout').click(function () {
    $.ajax({
        url: apiUrl + "/admin/adminLogout",
        type: "post",
        dataType: 'json',
        data: {},
        success: function (res) {
            if (res.status != 1) {
                layer.msg('退出失败', {icon: 2});
            } else {
                window.location.href = '../login.html';
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
});
//管理员信息
$('#adminInfo').click(function () {
    sessionStorage.d1 = '个人信息';
    sessionStorage.d2 = '';
    $('#d1').text(sessionStorage.d1);
    $('#d2').text(sessionStorage.d2);
    sessionStorage.htmlPage = 'adminInfo.html';
    $("#menuFrame").attr("src", sessionStorage.htmlPage);
    //点击个人的时候，把最开始获得给adminBH
    sessionStorage.adminBH = sessionStorage.adminMyself;
});

