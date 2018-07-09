$(function(){
	var trangthai = 'duoi 300';
	var doituongmenu = $('.menu');
	var logomenu = $('.logo');
	window.addEventListener("scroll", function(){
		if(window.pageYOffset > 300){
			if(trangthai == 'duoi 300'){
				trangthai = 'tren 300';
				doituongmenu.addClass('nholai');
				logomenu.addClass('logo2');
			}
		}else{
			if(trangthai == 'tren 300'){
				trangthai = 'duoi 300';
				doituongmenu.removeClass('nholai');
				logomenu.removeClass('logo2');
			}
		}
	});
})