$(function(){
	var nut = $('.n1');
	var khoi = $('.khoi');
	khoi.on("webkitAnimationEnd", function(){
		console.log("ketthuc");
		$(this).addClass('dixuong');
	});
	nut.on('click', function(){
		khoi.addClass('chuyendong');
	});
})