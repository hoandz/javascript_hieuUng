// quy trinh thuc hien
/*b1: tu dinh nghia cho phan tu von co cua no
	+ chinh la #kcd
	+ co chuyen dong tu dau
	+ toi khong muon the
	+ phai dinh nghia them class de du chot, cam no chuyen dong
	+ add class khongchuyendong animation: none

 *b2: khi click lan 1 thi xoa cai class chot khongchuyendong di de add class di chuyen theo chieu xuoi ban dau la chieu1 

 *b3: khi click lan 2 thi chi can remove class chieu1
*/
$(function() {
    var nut = $("#nut_hieu_ung");
    var khoichuyendong = $("#kcd");
    var trangthai = "lan1";
    nut.on("click", function() {

        if (trangthai == "lan1") {

            console.log("Click lan 1");
            trangthai = "lan2";
            khoichuyendong.removeClass("khongchuyendong")
            khoichuyendong.addClass("chieuso1");

        } else if (trangthai == "lan2") {

            console.log("Click lan 2");
            trangthai = "lan1";
            khoichuyendong.removeClass('chieuso1');

        }

    });
})