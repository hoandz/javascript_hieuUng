<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('local/bootstrap/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('css/article.css')}}">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>

<body>
    <div class="content">
        <div class="Menu">
            <div class="header_desktop">
                <div class="container">
                    <div class="logo">
                        <h2><a href="{{url('/view')}}">HoanTran</a></h2>
                    </div>
                    <div class="menuTitle">
                        <ul>
                            <li>Trang Chủ</li>
                            <li>Css Effect</li>
                            <li>Blog</li>
                            <li>About Me</li>
                        </ul>
                    </div>
                    <div class="social">
                        <div class="box-container">
                            <div class="iconSub"><i class="fa fa-share-alt"></i></div>
                            <div class="social-thump">
                                <div class="icon twi"><i class="fa fa-twitter"></i></div>
                                <div class="icon fb"><i class="fa fa-facebook"></i></div>
                                <div class="icon gg"><i class="fa fa-google-plus"></i></div>
                                <div class="icon ig"><i class="fa fa-instagram"></i></div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="menu1">
                        <input class="burger-check" id="burger-check" type="checkbox">
                        <label for="burger-check" class="burger"></label>
                    </div> -->
                </div>
            </div>
            <div class="header_mobile">
                <div class="container">
                    <div class="logo"><h2><a href="{{url('/view')}}">HoanTran</a></h2></div>
                    <div class="menuTitle">
                    </div>
                    <div class="menu1">
                        <i class="fa fa-bars nut"></i>
                    </div>
                </div>
            </div>
        </div> 
        <div class="contentElement">
            <div class="container">
                <div class="titlePost">
                    <h1>{{$article -> title}}</h1>
                    <span>july 13,2018</span>
                </div>
                <div class="imgPost">
                    <a href="#"><img src="https://i.ytimg.com/vi/RMKAGgkcI8s/maxresdefault.jpg" alt=""></a>
                </div>
                <div class="elementPost">
                        <p>
                            {{$article -> content}}
                        </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>@2018 - Hoantran Blog. All Right Reserved</p>
        </div>
    </div>
    <div class="contentMenu menutrai">
            <i class="fa fa-times nut"></i>
            <ul>
                <li class="list_item"><i class="fa fa-home"></i>Trang Chủ</li>
                <li class="list_item"><i class="fa fa-cog"></i>Css Effect</li>
                <li class="list_item"><i class="fa fa-book"></i>Blog</li>
                <li class="list_item sep"><i class="fa fa-user"></i>About Me</li>
                <li class="list_item ">
                </li>
            </ul>
    </div>
    <script src="{{asset('js/jquery-3.1.1.min.js')}}"></script>
    <script src="{{asset('js/index.js')}}"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
</body>

</html>