<?php

namespace App\Http\Controllers;

use App\Models\TipSmene;
use Illuminate\Http\Request;

class TipSmeneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TipSmene::all();
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
     * @param  \App\Models\TipSmene  $tipSmene
     * @return \Illuminate\Http\Response
     */
    public function show(TipSmene $tipSmene)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TipSmene  $tipSmene
     * @return \Illuminate\Http\Response
     */
    public function edit(TipSmene $tipSmene)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TipSmene  $tipSmene
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TipSmene $tipSmene)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TipSmene  $tipSmene
     * @return \Illuminate\Http\Response
     */
    public function destroy(TipSmene $tipSmene)
    {
        //
    }
}
