<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new UserResource(User::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string| ',
            'email' => 'email',
            'phone' => '', 
            'birthdate' => '',
            'mesto'=>'',
            'sss_id'=>'',
            'plata'=>''
             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());

        $l=User::find($id);
        if($l){
            $l->name = $request->name;
            $l->email = $request->email;
            $l->phone = $request->phone;
            $l->birthdate = $request->birthdate;
            $l->mesto = $request->mesto;
            $l->kvalifikacijaID = $request->kvalifikacijaID;
            $l->plata = $request->plata;
            
            $l->save();
            return response()->json(['User uspesno izmenjen!', new UserResource($l)]);
        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if($user){ 
            $user->delete();
            return response()->json("uspesno obrisan user!" );
        } else {

            return response()->json([
                'message' => 'Ne postoji u bazi.',
            ], 400);
        }
    }

    public function prosecnaPlata(){
        $users = User::all();
        $suma=0;
         for($i=0;$i<User::count();$i++){
                $suma+= $users[$i]->plata;
         }
         return  $users/User::count();

    }

    








}
