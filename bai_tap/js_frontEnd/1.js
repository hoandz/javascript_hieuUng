$(function(){
	//khai bao cac bien can dung
	var nut = $(".nut");
	var menutrai = $(".menutrai");
	var den = $(".den");
	var khoito = $(".noidungto");
	//khi click vao nut xanh
	nut.on("click", function(){
		//cho ca khoi to dich sang phai
		khoito.toggleClass('dichphai');
	})
	$('.box').addClass('boxdai');
})