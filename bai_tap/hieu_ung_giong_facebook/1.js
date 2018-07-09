$(function(){
	//khai bao bien can su dung trong app nay
	// var tamgiac = $(".tamgiac");
	// var tamgiac = tamgiac;
	// var danhsach = $(".danhsach");
	// var danhsach = danhsach;
	// var trangthai = "lan1";
	//su dung su kien onclick va toggle cho tam giac doi mau
	// tamgiac.on("click", function(){
	// 	if (trangthai == "lan1") {
	// 		$(this).addClass('doimautamgiac');
	// 		danhsach.addClass("ra");
 //            trangthai = "lan2";

 //        } else if (trangthai == "lan2") {
 //            $(this).removeClass('doimautamgiac');
 //            danhsach.removeClass("ra");
 //            trangthai = "lan1";
 //        }
		
	// });
	/*CACH MOI*/
	$("#nutbamdanhsach").on("click",function(){
		$("#nutbamdanhsach").toggleClass('doimautamgiac');
		$("#danhsach").toggle();
	});
})