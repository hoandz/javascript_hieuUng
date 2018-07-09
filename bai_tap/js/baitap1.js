	var mangdl = [];
	$('#commentSubmit').click(function() {
	    var ten = $('#name').val();
	    var comment = $('#comment').val();
	    var phanTu = {
	        "ten": ten,
	        "noidung": comment
	    };
	    var viTri = $('#picker').val();
	    if (viTri == "Prepend") {
	        mangdl.unshift(phanTu);
	    } else {
	        mangdl.push(phanTu);
	    }

	    veMang(mangdl);
	});

	function veMang(mang) {
	    $('#box').html('');
	    for (var i = 0; i < mang.length; i++) {
	        var noidung1khoi = `
	    	<div id="comment_1">
				<button class="remore_div">X</button>
				<div class="ten">
	                <div id="ten">${mang[i].ten}</div>
	            </div>
	            <div class="comment">
	                <div id="noidung">${mang[i].noidung}</div>
	            </div>
	    	</div>
		`;
	        $('#box').append(noidung1khoi);
	    }
	    $(".remore_div").click(function(event) {
	       	event.preventDefault();
	       	$(this).parent().remove();
		});
	}