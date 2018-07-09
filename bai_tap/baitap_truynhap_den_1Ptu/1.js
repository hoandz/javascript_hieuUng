//click vao 1 nut cho khoi noi dung di sang phai va click lan nua thi khoi noi dung tro ve cho cu
//su dung transiton hoac animation
//b1: truy xuat nut button
//truoc khi truy xuat phai document ready
$(function(){
	//truy xuat nut button
	var nut = $("#nut1");
	var khoi1 = $(".card");
	console.log(khoi1);
	//goi su kien click
	function myToggle(element, className) {
		if (element.hasClass(className)) {
			element.removeClass(className);
		} else {
			element.addClass(className);
		}
	}
	nut.on('click',function(){
		myToggle(khoi1, 'sangPhai');
	});
})