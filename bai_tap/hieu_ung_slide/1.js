$(function() {
    // console.log($('.chuyenslide ul li.kichhoat'));
    var nutDangKichHoat = $('.chuyenslide ul li.kichhoat')[0];
    var viTriBanDau = $(nutDangKichHoat).attr('data-index');
    ActiveSlide(viTriBanDau);
    // //khai bao mot so doi tuong can su dung
    var nut = $(".chuyenslide ul li");
    //nut tra ve mot mang nut
    for (var i = 0; i < nut.length; i++) {
        $(nut[i]).on('click', function() {
            clearInterval(thoigian);
            var vitrihientai = $(this).attr('data-index');
            ActiveSlide(vitrihientai);
            ActiveButton(vitrihientai);
        });
    } //het su kien cho nut

    function ActiveButton(vitrihientai){
        var nut = $(".chuyenslide ul li");
        for (var i = 0; i < nut.length; i++) {
            if(i == vitrihientai){
                $(nut[vitrihientai]).addClass('kichhoat');
            } else{
                $(nut[i]).removeClass('kichhoat');
            }
        }
    }
    function ActiveSlide(vitrihientai) {
        var slides = $(".cacslide ul li");
        for (var i = 0; i < slides.length; i++) {
            if (i == vitrihientai) {
                $(slides[vitrihientai]).addClass('active');
            } else {
                $(slides[i]).removeClass('active');
            }
        }
    }
    var index = 0;
    var thoigian = setInterval(function() {
        ActiveSlide(index);
        ActiveButton(index);
        index ++;
        if (index == 3) {
            index = 0;
        }
    }, 4000);
})