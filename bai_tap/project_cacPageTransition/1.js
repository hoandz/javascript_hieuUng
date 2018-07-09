$(function() {

    var nutPhai = $(".nuts b.phai");
    var nutTrai = $('.nuts b.trai');
    var slides = $('.slides ul li');
    var chiSoHienTai = 0;
    var soLuongSlide = slides.length;
    var trangThai = 'dangDungYen';

    var chuyenSlideChoNutPhai = function() {
        if(trangThai == 'dangChuyenDong'){
        	return false;
        	//dung chuong trinh
        }
        //den dong nay tuc la dang dung yen, xu ly don gian
        //danh dau la dang chuyen dong
        trangThai = 'dangChuyenDong';
        var trangThaiCua2ChuyenDong = 0;
        var ptuHienTai = slides[chiSoHienTai];
        //xac dinh chi so cua phan tu tiep theo
        if(chiSoHienTai < soLuongSlide-1){
        	chiSoHienTai++;
        }else{
        	chiSoHienTai = 0;
        }
        var phanTuTiepTheo = slides[chiSoHienTai];
        //check chuyen dong ket thuc
        var xuLyHienTaiKetThucCD = function(){
        	$(this).removeClass('active');
        	$(this).removeClass('bienMatKhiAnNext');
        	trangThaiCua2ChuyenDong++;
        	if(trangThaiCua2ChuyenDong==2){
        		trangThai = 'dangDungYen';
        	}
        }
        $(ptuHienTai).on('webkitAnimationEnd', xuLyHienTaiKetThucCD);

        var xuLyTiepTheoKetThucCD = function(){
        	$(this).removeClass('diVaoKhiAnNext');
        	$(this).addClass('active');
        	trangThaiCua2ChuyenDong++;
        	if(trangThaiCua2ChuyenDong==2){
        		trangThai = 'dangDungYen';
        	}
        }
        $(phanTuTiepTheo).on('webkitAnimationEnd', xuLyTiepTheoKetThucCD);
        //tao chuyen dong sau khi xac dinh duoc 2 phantu
        $(ptuHienTai).addClass("bienMatKhiAnNext");
        $(phanTuTiepTheo).addClass("diVaoKhiAnNext");
    };

    //xac dinh slide hien tai va slide tiep theo khi click nut next

    //goi su kien click vao nut
    //xong nut phai

    // den nut trai
    var chuyenSlideChoNutTrai = function() {
        if(trangThai == 'dangChuyenDong'){
        	return false;
        }
        trangThai = "dangChuyenDong";

        var phantuHienTai = slides[chiSoHienTai];
        if(chiSoHienTai > 0){
        	chiSoHienTai--;
        }else{
        	chiSoHienTai = soLuongSlide -1;
        }
        var pTuTiepTheo = slides[chiSoHienTai];
        var trangThaiCua2ChuyenDong = 0;
        //-------------
        var xuLyHienTaiKetThucCD = function(){
        	$(this).removeClass('active');
        	$(this).removeClass('bienMatKhiAnPrev');
        	trangThaiCua2ChuyenDong++;
        	if(trangThaiCua2ChuyenDong == 2){
        		trangThai = "dangDungYen";
        	}
        }
        var xuLyTiepTheoKetThucCD = function(){
        	$(this).addClass('active');
        	$(this).removeClass('diVaoKhiAnPrev');
        	trangThaiCua2ChuyenDong++;
        	if(trangThaiCua2ChuyenDong == 2 ){
        		trangThai = "dangDungYen";
        	}
        }
        $(phantuHienTai).on('webkitAnimationEnd', xuLyHienTaiKetThucCD);
        $(pTuTiepTheo).on('webkitAnimationEnd', xuLyTiepTheoKetThucCD);

        $(phantuHienTai).addClass('bienMatKhiAnPrev');
        $(pTuTiepTheo).addClass('diVaoKhiAnPrev');
    }


    nutTrai.on('click', chuyenSlideChoNutTrai);
    nutPhai.on("click", chuyenSlideChoNutPhai);
})