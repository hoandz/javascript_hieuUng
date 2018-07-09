$(function(){
	var trangthai = 'chua den, dang o duoi 300';
	//bat su kien khi nguoi dung scroll
	window.addEventListener('scroll', function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset>300){
			if(trangthai == 'chua den, dang o duoi 300'){
				console.log("dang o menu");
				trangthai = 'dang o tren 300';
			}
			
		}
	})
})