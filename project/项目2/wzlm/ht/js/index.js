//设置布局
$(function() {
	//设置左侧导航尺寸，右侧内容尺寸
	var width = $(window).width() - $('.content-nav').outerWidth();
	var height = $(window).height() - $('#header').height();
	$('.content-nav').height(height)
	$('.content-main').width(width)
	$('.content-main').height(height)
	
	$(window).resize(function(){
		var width = $(window).width() - $('.content-nav').outerWidth();
		var height = $(window).height() - $('#header').height();
		$('.content-nav').height(height)
		$('.content-main').width(width)
		$('.content-main').height(height)
	})
})

