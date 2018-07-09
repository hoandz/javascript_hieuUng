// var  x = " Dien thoai  iphone, adroid, nokia";
// //console.log(x.length);
//  var vitri = x.indexOf('iphone'); //neu co iphone trong x, thi tra ve vi tri cua tu do
//  //neu khong tim thay thi tra ve la -1
//  if(vitri != -1){
//  		console.log("tim thay");
//  		var moi = x.replace('iphone','bphone');
//  			console.log(moi);
//  }else{
//  		console.log("khong tim thay");
//  }
var x = "iphone, adroid, nokia, blackbery, samsung";
//su dung ham split de tach thanh 1 mang
var mang = x.split(',');
	console.log(mang);
	for(var i = 0; i < mang.length; i++){
			console.log(mang[i]);
	}