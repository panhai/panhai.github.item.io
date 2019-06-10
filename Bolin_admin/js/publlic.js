function Nav() {
    //  list-title box
    var Nav_title = $('.nav-box .list-title');
    var Nav_box = $('.nav-box .box');
    console.log(Nav_title)
    Nav_title.on('click', function() {
        $(this).addClass('cur');
        $(this).parent().siblings('li').children('.list-title').removeClass('cur');

        if ($(this).siblings('.box').css('display') !== 'none') {
            $(this).siblings('.box').stop().slideUp(200);
            $(this).children('i.h').addClass('layui-icon-right').removeClass('layui-icon-down');
        } else {
            $(this).siblings('.box').stop().slideDown(200);
            $(this).parent().siblings('li').find('.box').stop().slideUp(200);
            // layui-icon-right layui-icon-down
            $(this).children('i.h').addClass('layui-icon-down').removeClass('layui-icon-right');
            $(this).parent().siblings('li').children('.list-title').children('i.h').addClass('layui-icon-right').removeClass(
                'layui-icon-down');
        }

    })
}
Nav();

// 左侧导航伸缩切换
var focu = true; //开关
$('.toggle-nav').on('click', function() {
    if (focu) {
        focu = !focu;
        $('.nav-left').animate({ left: -220 });
        $('.mian-content').animate({ 'margin-left': 10 });
    } else {
        focu = !focu;
        $('.nav-left').animate({ left: 0 });
        $('.mian-content').animate({ 'margin-left': 235 });
    }

})

// 将表单的所有数据拼接成object 对象 from 为jq对象 $('form')
var serializeObject = function(from) {
    var o = {};
    $.each(from.serializeArray(), function(index) {
        if (o[this['name']]) {
            o[this['name']] = o[this['name']] + "," + this['value'];
        } else {
            o[this['name']] = this['value'];
        }
    });
    console.log(o);
    return o;
}

// 显示切换用户设置
$('.userSet').hover(function(){
    $(this).children('div').stop().show()
},function(){
    $(this).children('div').stop().slideUp()
})