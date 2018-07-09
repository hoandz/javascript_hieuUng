
$(function(){
	var nutbam = $('.nutbam');
	for (var i = 0; i < nutbam.length; i++) {
			// $(nutbam[i]).on("click",function(){
			// 	console.log($(this).toggle());
			// });
			nutbam[i].onclick =function(){
				console.log($(this).attr('data-matkhau'));
			};
	}
})