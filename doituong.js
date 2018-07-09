var dongho = {
	hangsx : "casio",
	mau : "den",
	gia : 2000000,
	gioitinh : "nam",
	hienthingay : function(){
		console.log("hom nay ngay 19-9-2017");
	}
}
//cach khai bao 1 doi tuong
var hocvien = {
	ten : "Viet",
	ho : "Nguyen",
	tuoi : 32,
	chieucao : 132,
	cannang : 45,
	//this la phan tu hocvien
	tendaydu : function(){
		return this.ho + " " + this.ten;
	},
	danhgia : function(){
		if(this.chieucao/this.cannang < 3){
			return "dep trai";
		}else {
			return "Hoi gay, can boi bo them";
		}
	}
}
console.log(hocvien.tendaydu());
console.log("tuoi hoc vien la: " + hocvien.tuoi);
console.log(hocvien.danhgia());