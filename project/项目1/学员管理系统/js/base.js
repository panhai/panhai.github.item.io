/*
 * 布局js
 */

(function() {
	//页面布局
	var height = $(window).height();
	var left = $('.navMain').width();
	var width = $(window).width() - $('.navMain').width() - ($('.navMain')[0].offsetWidth - $('.navMain')[0].scrollWidth);
	$('.navMain').height(height);
	$('.containerMain').height(height);
	$('.containerMain').width(width);
	$('.containerMain').css('left', left);
	
	//左侧导航点击效果
	
	$('.navMain .list').click(function(){
		var index = parseInt($(this).attr('index'));
//		console.log(index) 
		$('.second-nav').stop().hide(160);
		$('.second-nav').eq(index).stop().slideToggle(160);
		$(this).children('.fa-angle-right').toggleClass('fa-show');
		$(this).siblings('.list').children('.fa-angle-right').removeClass('fa-show');
	})
	
	//点击二级导航
	$('.second-nav p').click(function(){
		$(this).children('a').addClass('active');
		$(this).siblings().children('a').removeClass('active');
	})
	
	
})()