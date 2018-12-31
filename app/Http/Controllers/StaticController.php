<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StaticController extends Controller
{

    public function __construct()
    {
        //
    }

    public function home()
    {
        return view('static.home');
    }

}
