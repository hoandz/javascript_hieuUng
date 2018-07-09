$(function(){
	//khai bao cac bien can dung
	var nut = $(".nut");
	var menutrai = $(".menutrai");
	var den = $(".den");
	var khoito = $(".noidungto");
	//khi click vao nut xanh
	nut.on("click", function(){
		den.addClass('len');
		//cho ca khoi to dich sang phai
		khoito.addClass('dichphai');
	})
	den.on("click", function(){
		den.removeClass('len');
		//cho ca khoi to dich sang phai
		khoito.removeClass('dichphai');
	})
})