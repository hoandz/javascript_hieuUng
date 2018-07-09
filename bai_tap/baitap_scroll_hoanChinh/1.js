$(function() {
    //khai bao 1 so bien can dung
    var menudo = $(".menu");
    var trangthaimenudo = 'duoi100';
    var chungtoi = $(".chungtoi");
    var vtkhoivang = chungtoi.offset().top;
    var dienchanVTKHOiVang = vtkhoivang + 900;
    var trangthaikhoivang = 'duoi';
    //su dung window.addeventlistener xac dinh vi tri cua menu
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            if (trangthaimenudo == 'duoi100') {
                trangthaimenudo = 'tren100';
                menudo.addClass('menuden');
            }
        } else {
            if (trangthaimenudo == 'tren100') {
                trangthaimenudo = 'duoi100';
                menudo.removeClass('menuden');
            }
        }
        //xu ly khoi vang
        // if (window.pageYOffset > vtkhoivang && window.pageYOffset < dienchanVTKHOiVang) {
        //     if (trangthaikhoivang == 'duoi') {
        //         trangthaikhoivang = 'danghienthi';
        //         chungtoi.addClass('vangdunglai');
        //     }
        // } else if (window.pageYOffset < vtkhoivang || window.pageYOffset > dienchanVTKHOiVang) {
        //     if (trangthaikhoivang == 'danghienthi') {
        //         trangthaikhoivang = 'duoi';
        //         chungtoi.removeClass('vangdunglai');
        //     }
        // }
    });
})