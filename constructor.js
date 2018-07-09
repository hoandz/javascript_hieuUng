var cacmonan = {
	ten : "thit luoc",
	nguyenlieu : "thit lon",
	gia: 20000
};
var monanso2 = cacmonan;
monanso2.ten = "thit cho";
console.log(cacmonan);
console.log(monanso2);

//khai bao constructor

function monan(t, nl, g){
	this.ten = t;
	this.nguyenlieu = nl;
	this.gia = g; 
}
var mon1 = new monan('rau xao','rau muong',2229);
var mon2 = new monan('thit luoc','thit bo',222222);
console.log(mon2);
console.log(mon1);
