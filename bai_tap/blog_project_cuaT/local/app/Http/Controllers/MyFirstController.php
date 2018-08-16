<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\vp_post;

class MyFirstController extends Controller
{
    //
    public function getController($stn,$sth){
    	$tong = $stn+$sth;
    	return $tong;
    }

    // phuong thuc de doc dc file myfirstview
    public function getView(){
    	$articles = vp_post::all();
        return view('index', compact('articles'));
    }
    //admin
    public function getAdmin(){
        return view('admin');
    }
    //end admin
    public function showArticle($id){
        $article = vp_post::find($id);
    	return view('article') -> with('article', $article);//resources/views : article.blade"
    }
}
