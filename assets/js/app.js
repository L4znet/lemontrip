$(document).ready(function(){
	var header = $("header");
	$(document).scroll(function(e){
		if($(document).scrollTop() >= 635){
			header.css({
				'position':'fixed',
				'height':'80px',
				'box-shadow':'0px 2px 5px 0px #c0c0c0',
				'z-index':'9999'
			});
			header.children('.logo').addClass('on_scroll_logo');
			header.children('.logo').removeClass('logo');
		} else {
			header.children('.on_scroll_logo').addClass('logo');
			header.children('.on_scroll_logo').removeClass('on_scroll_logo');
			header.css({
				'position':'static',
				'height':'120px',
				'box-shadow':'none'
			});
		}
	})

	var play_button = $('.play_button');
	var video_container = $('.video_container');
	var video_pub = $('.video_container').children('video').get(0);
	play_button.click(function(){
		video_pub.play();
		if(video_pub.play()){
			play_button.hide();
		}
	});


	$(function(){
      setInterval(function(){
         $(".slider ul").animate({marginLeft:-710},800,function(){
            $(this).css({marginLeft:-0}).find("li:last").after($(this).find("li:first"));
         })
      }, 3500);
   });
});