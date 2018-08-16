<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//Router Tinh tong 
Route::get('hello/{stm}/{sth}',function($stn,$sth){
	echo $stn + $sth;
});
// root/hello/linh
// ===Groupt Route===
Route::group(['prefix'=>'admin'],function(){
	Route::get('home',function(){
		return "Day la trang home";
	});
	Route::group(['prefix'=>'product'],function(){
		Route::get('add',function(){
			return "day la trang quan ly san pham";
		});
	});
});

//controller: lay du lieu tu model ra view
Route::get('controller/{stn}/{sth}','MyFirstController@getController');

// phuong thuc de ket noi toi file myfirstview
//
Route::get('view','MyFirstController@getView');
Route::get('admin','MyFirstController@getAdmin');
Route::get('article/{id}','MyFirstController@showArticle');
