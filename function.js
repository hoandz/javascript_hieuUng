// var x1 = 10;
// var x2 = 20;
// var x3 = x1 + x2;
// console.log("Tong cua 2 so la: " + x3);
// function tinhtong(x1,x2){
// 	var tong = x1 + x2;
// 	console.log("Tong cua 2 so: " + tong);
// }
// tinhtong(2,3);

/*
	+ function khong co tham so (dung de dong goi cac dong code hay dung thanh 1 ham)
	+ function co tham so function vidu(x1,x2){}
	+ anonymous function
*/
// vd1 "HAM KHONG CO THAM SO"
// function vd1(){
// 	var ten = "hoan";
// 	console.log("Di choi ko: " + ten);
// }
// vd1();
// //vd2 "Ham co tham so"
// function vd2(ten){
// 	console.log("Toi co di hoc khong: " + ten);
// }
// vd2("Anh Hoan");
// //
// function vd3(x,y,r,w,s,c){
// 	console.log("Trung binh cong cua 6 so la: " + (x+ y + r + w+s+c)/6);
// }
// vd3(22,33,55,33,43,43);

// cau lenh return trong ham
// function tinhtbc(x,y){
// 	var z = (x + y)/2
// 	return z;
// }
// console.log(tinhtbc(23,43));

//anonymous == khong ten + tiet kiem du lieu
var z = function (x,y){
	return  (x+y)/2;
}
console.log(z(2,4));


// closure function => la ham tao ra 1 bien ben trong no va 1 ham ben trong no
function chao(){
	var ten = "hoan";
	var thongbao = function(){
		console.log("cafe khong ha: " + ten);
	}
	ten = ten + " - dep trai";
	return thongbao;
}
var h = chao();
h();