<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Smena extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'radnikID',
        'datum',
        
        'tipSmeneID',
        'pocetak'
    ];


    public function radnik()
    {
        return $this->belongsTo(User::class);
    }


    public function tipSmene() //kuca ili posao
    {
        return $this->belongsTo(TipSmene::class);
    }



}
