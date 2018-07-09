// for(var i = 1; i < 100; i++){
// 	//cau lenh thuc hien trong vong lap
// 	console.log(i);
// }
var sv = ['Viet','Nam','Huong'];
console.log(" In ra tat ca phan tu bang vong lap");
for( var i = 0; i < sv.length; i++){
	console.log(sv[i]);
}
//vong lap for in
var hocvien = {
	ten : "Viet",
	tuoi : 22,
	diemToan : 2,
	diemLy : 4,
	diemanh: 3,
	chieucao: "334 cm"
}
var x;
for( x in hocvien){
	console.log(hocvien[x]);
}