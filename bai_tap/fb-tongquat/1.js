$(function(){
	// var nutbam_user = $('.nutbam_user');
	// var nutbam_comment = $('.nutbam_comment');
	// var nutbam_globe = $('.nutbam_globe');
	// var nutbam_circle = $('.nutbam_circle');
	// var nutbam_tamgiac = $('.nutbam_tamgiac');
	// nutbam_user.on("click",function(){
	// 	nutbam_user.toggleClass('doimauicon');
	// });
	var nut = $('.declick');
	var nd = $('.dehienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			for (var k = 0; k < nut.length; k++) {
				nut[k].classList.remove('doimauicon');
			}
			$(this).toggleClass('doimauicon');
			var ndhienra = $(this).attr('data-hienlen');
			var phan_tu_hien_ra = document.getElementById(ndhienra);
			for (var i = 0; i < nd.length; i++) {
				nd[i].classList.remove('ra');
			}
			phan_tu_hien_ra.classList.toggle('ra');
		}
	}
})