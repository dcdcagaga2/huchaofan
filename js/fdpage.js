/// <reference path="jquery-1.8.2.min.js" />


//1██154145████████215██721██151█████345678812345██812345██812344████████86
//2██000025002██780341██00██0568██8765441326651██48██3468██014665748568██87
//2██456780001██687o01██0██08001████53600146700██77██4678██87811612661██670
//2██000456007██240056█████32345████01261530276██████4653██366701222██12863
//2██456780100██600802████678023████45672563456██74326782██4308243██2365736
//2██456780100██807182██0██86702██3678574531531██31253312██457801██23477850
//2██████34████████883██00██0103██████123201247██34673280██████64████████15 

$(function () {
    //debugger;
    //点击电话咨询弹出电话弹窗
    $('.bottomNav .btndefault').on('touchend', function () {
        //debugger;
        $('#defAccount').fadeIn();
        $('.defAccount-box').animate({
            'bottom': '0%'
        }, 1000);
    });

    //点击电话咨询弹出电话弹窗
    $('#defAccount ,.tel i').on('touchend', function (evnet) {
        $('.defAccount-box').animate({
            'bottom': '-33%'
        }, 1000, function () {
            //$('#defAccount').removeClass('active');
            $('#defAccount').fadeOut();
        });
    });





    //==================个人中心 

    //关闭通知效果
    $('.usermassage span.close').on('touchend', function (evnet) {
        //debugger;
        $('.usermassage').hide(500);

        //$('.usermassage').animate({
        //    'height': '0rem',
        //}, 500, function () {
        //    $(this).parents("section").remove();
        //})
    });



    //==================列表中心， 添加客服电话
    //列表页输入框 start
    var timerLen = null;
    //点击搜索
    $('.seachShow').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        clearInterval(timerLen);
        timerLen = setInterval(function () {
            if ($('.seek .seachShow.active input ').val().replace(/\s/g, '').length > 0) {
                $('.seachShowBox .clear-btn').show();
            } else {
                $('.seachShowBox .clear-btn').hide();
                //$('.seek .seachShow.active input').val('');
            }
        }, 30);
        //debugger;
        $('.offBtn').show().text('搜索').css('color', '#33be61');
        $('.seek .seachShow.active input').focus();
    });

    //失去焦点
    //$('.seek .seachShow input').on('blur', function () {
    //    clearInterval(timerLen);
    //    $('.seachShowBox .clear-btn').hide();
    //});

    ////确定
    $('.offBtn').on('click', function () {
        if ($(this).text() == '搜索') {
            if ($('.seek .seachShow.active input ').val().replace(/\s/g, '').length > 0) {
                $(this).text('取消').css('color', '#ff7c70');
                $('.seachShowBox .clear-btn').hide();
            }
        } else {
            $(this).parents('.seachShowBox').eq(0).find('.seachShow').removeClass('active');
            $('.offBtn').hide();
            $('.seachShow').find('input').val('');
            $('.seachShowBox .clear-btn').hide();
        }
    });

    //取消搜索
    $('.seachShowBox  .clear-btn').on('click', function () {
        $(this).hide();
        $('.seachShow').find('input').val('');
    });






    //品牌名称修改*************

    //列表页输入框 start
    var timerLen = null;
    //点击搜索
    $('.seachShow2').on('click', function () {
        //if (!$(this).hasClass('active')) {
        //    $(this).addClass('active');
        //}
        //clearInterval(timerLen);
        timerLen = setInterval(function () {
            //debugger;
            if ($('.seek2 .seachShow2 input ').val().replace(/\s/g, '').length > 0) {
                $('.seachShowBox2 .clear-btn2').show();
            } else {
                $('.seachShowBox2 .clear-btn2').hide();
                //$('.seek .seachShow.active input').val('');
            }
        }, 30);
        //debugger;
        $('.seek2 .seachShow2.active input').focus();
    });
    ////确定
    $('.offBtn2').on('click', function () {
        if ($(this).text() == '搜索') {
            if ($('.seek2 .seachShow2.active input ').val().replace(/\s/g, '').length > 0) {
                $(this).text('取消').css('color', '#ff7c70');
                $('.seachShowBox2 .clear-btn').hide();
            }
        } else {
            $(this).parents('.seachShowBox2').eq(0).find('.seachShow2').removeClass('active');
            $('.offBtn2').hide();
            $('.seachShow2').find('input').val('');
            $('.seachShowBox2 .clear-btn2').hide();
        }
    });

    //取消搜索
    $('.seachShowBox2  .clear-btn2').on('click', function () {
        $(this).hide();
        $('.seachShow2').find('input').val('');
    });





    //修改店铺地址***********
    $(".editAd li").click(function () {
        //debugger;
        $(".editAd li").removeClass("active");
        $(this).addClass("active");
    })


    //个人设置
    //点击上传效果(门店)
    $(".setupinfo_1 img,.setupinfo_1 .phototitle").click(function (event) {
        //debugger;
        $(this).parents("li").find("input").click();
        event.stopPropagation();
    })
    //点击上传效果(企业照片)
    $(".setupinfo_1 .img").click(function (event) {
        //debugger;
        //event.stopPropagation();
        $(".setupinfo_1 .img").unbind("click");
        $(this).parents("div").find("input").click();
        
        return false;
    })

})













