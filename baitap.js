var mangdl = [
  {
    "id": 1,
    "anh": "https://dantricdn.com/zoom/130_100/2018/5/23/bui-van-phuong-1496046499647-15270766170281830064714.jpg",
    "ten": "Ho Thi Thao",
    "noidungcm": "(Dân trí) - Đại biểu Dương Trung Quốc cho rằng, đường BOT không phải sở hữu của nhà đầu tư mà thực chất doanh nghiệp chỉ đóng góp 'cổ phần' giá trị con đường nên thu phí là hợp lý, chứ không thể thu giá."
  },
  {
    "id": 2,
    "anh": "https://dantricdn.com/zoom/130_100/2018/5/23/nguoi-mau-bi-hiep1-15270507452881303406582.jpg",
    "ten": "Ho Thi Thao",
    "noidungcm": "(Dân trí) - Đại biểu Dương Trung Quốc cho rằng, đường BOT không phải sở hữu của nhà đầu tư mà thực chất doanh nghiệp chỉ đóng góp 'cổ phần' giá trị con đường nên thu phí là hợp lý, chứ không thể thu giá."
  }
];
for (var i = 0; i < mangdl.length; i++){
	var noidung1khoi = `
		<div class="kcm" id="kcm-${mangdl[i].id}">
					<img src="${mangdl[i].anh}" alt="" class="float-xs-left pr-1">
					<b>${mangdl[i].ten}</b> <span> ${mangdl[i].noidungcm}</span>
		</div>`;
	// var giatrihientai = $('#caccm').html();
	// var giatrimoi = giatrihientai + noidung1khoi;
	// $('#caccm').html(giatrimoi);
	// console.log(giatrihientai);
	//ham append no se thay minh lam 4 buoc tu dong 21 => 24, chen vao sau
	// $('#caccm').append(noidung1khoi);
	// ham prepend  no se thay minh lam 4 buoc tu dong 21 => 24, chen vao truoc noi dung hien tai
	$('#caccm').prepend(noidung1khoi);
}