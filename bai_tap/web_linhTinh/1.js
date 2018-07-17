$(function(){
	var menuDesktop = $('.header_desktop');
	var menuMobile = $('.header_mobile');
	var trangThaiMenu = 'duoi97';
	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 249){
			if(trangThaiMenu == 'duoi97'){
				trangThaiMenu = 'tren97';
				menuDesktop.addClass('doiMauHeader');
				menuMobile.addClass('doiMauHeader');
			}
		}else{
			if (trangThaiMenu == 'tren97') {
				trangThaiMenu = 'duoi97';
				menuDesktop.removeClass('doiMauHeader');
				menuMobile.removeClass('doiMauHeader');
			}
		}
	});
	$('.nut').on('click', function(){
		$('.content').toggleClass('content2');
		$('.contentMenu').toggleClass('menutrai');
	});
})