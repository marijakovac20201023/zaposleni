<?php

namespace App\Http\Controllers;

use App\Http\Resources\SmenaResource;
use App\Models\Smena;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SmenaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SmenaResource::collection(Smena::all());
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
        $validator = Validator::make(
            $request->all(),
            [
                'radnikID' =>  'required' , 
                'datum' => 'required', 
                'tipSmeneID' => 'required',
                'pocetak' => 'required', 

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());


         
            

        $s = Smena::create([
                'radnikID' =>   $request->radnikID, 
                'datum' => $request->datum, 
                'tipSmeneID' =>  $request->tipSmeneID, 
                'pocetak' =>  $request->pocetak, 
                 
        ]);
        return response()->json(["Uspesno dodata smena",$s]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new SmenaResource(Smena::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function edit(Smena $smena)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Smena $smena)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Smena  $smena
     * @return \Illuminate\Http\Response
     */
    public function destroy(Smena $smena)
    {
        //
    }


 
   
    
}
