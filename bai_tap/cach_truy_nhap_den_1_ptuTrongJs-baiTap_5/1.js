//javascript la viet ntn
// document.addEventListener("DOMContentLoaded".function(){

// },false)
//con day la jquery
$(function(){
	var x1 = $("#n1");
	console.log(x1);
	x1.on('click', function(){
		console.log("ban vua click vao " + x1);
		x1.addClass('diXuong');
	});
})
