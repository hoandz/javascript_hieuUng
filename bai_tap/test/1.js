// $(function(){
// 	var nen = $(".menuWp ul");
// 	var background = $('.main');
// 	for (var i = 0; i < nen.length; i++) {
// 		$(nen[i]).on("click", function() {
// 			// Khoi phuc lai toan bo phan tu cu
// 			for (var i = 0; i < nen.length; i++) {
// 				if ($(nen[i]).attr('data-index') == $(this).attr('data-index')) {
// 					console.log("Remove Ul Hover", $(nen[i]).attr('data-index'));
// 					$(nen[i]).removeClass('menuWp-ul-hover');
// 					$(nen[i]).addClass('mautrang');
// 				} else {
// 					console.log("Add Ul Hover", $(nen[i]).attr('data-index'));
// 					$(nen[i]).addClass('menuWp-ul-hover');
// 					$(nen[i]).removeClass('mautrang');
// 				}
// 			}
// 		});
// 	}
// });
// $( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
// 	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/05/different-social-nav-styles.html#tlt")  
// });
$(function(){
	$('.nut').on('click', function(){
		// $('.content').toggleClass('content2');
		// $('.contentMenu').toggleClass('menutrai');
	});
})