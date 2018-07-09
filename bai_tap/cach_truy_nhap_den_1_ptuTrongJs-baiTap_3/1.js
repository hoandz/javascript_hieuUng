var a = document.querySelectorAll(".card-title");
// console.log(a[1]); //a luc nay no la 1 mang

for (var i = 0; i < a.length; i++) {
	if(i == 1){
		console.log(a[i]);
		a[i].innerHTML = "Phan tu tuy chon";
	}
}

