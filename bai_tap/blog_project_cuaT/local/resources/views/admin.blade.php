<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('local/bootstrap/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('css/admin.css')}}">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://cdn.ckeditor.com/ckeditor5/11.0.1/classic/ckeditor.js"></script>
</head>

<body>
	<div class="nav_menu">
			<ul class="menu">
				<li><i class="fa fa-edit"></i>Bài Viết Mới</li>
				<li><i class="fa fa-th"></i>Tất Cả Bài Viết</li>
			</ul>
	</div>
	<div class="bai_viet_moi">
		<div class="container editer">	
			<textarea name="content" id="editor">
		        <p>This is some sample content.</p>
		    </textarea>
		</div>
	</div>
	
   <script>
        ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>
    <script src="{{asset('js/jquery-3.1.1.min.js')}}"></script>
    <!-- <script src="{{asset('js/admin.js')}}"></script> -->
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
</body>

</html>