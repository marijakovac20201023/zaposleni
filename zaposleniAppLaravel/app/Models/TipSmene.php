<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipSmene extends Model
{
    use HasFactory;
    protected $fillable = [
        'nazivTipaSmene',
         
    ];
    public function smena()
    {
        return $this->hasMany(Smena::class);
    }
}
