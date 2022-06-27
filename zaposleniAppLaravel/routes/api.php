<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SmenaController;
use App\Http\Controllers\StatistikaController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
 
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('smene', [SmenaController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::delete('users/{id}', [UserController::class, 'destroy']);
Route::get('users', [UserController::class, 'index']);
Route::put('users/{id}', [UserController::class, 'update']);
 

Route::group(['middleware' => ['auth:sanctum']], function () {   
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });

  
 
    
    Route::get('smene/{id}', [SmenaController::class, 'show']);
    Route::post('smene', [SmenaController::class, 'store']);
   
    Route::post('logout', [AuthController::class, 'logout']);  
  
});


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){  

    Route::get('/proveri', function(){
        return response()->json(['message'=>'Admin je ulogovan','status'=>200],200);
    });
   

});