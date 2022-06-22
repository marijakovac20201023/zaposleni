<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kvalifikacija extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'nazivSSS',
         
    ];


    public function zaposleni()
    {
        return $this->hasMany(User::class);
    }
}
