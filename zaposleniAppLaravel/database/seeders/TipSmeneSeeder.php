<?php

namespace Database\Seeders;

use App\Models\TipSmene;
use Illuminate\Database\Seeder;

class TipSmeneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ts1 = new TipSmene();
        $ts1->nazivTipaSmene = "kuca";
        $ts1->save();

        $ts2 = new TipSmene();
        $ts2->nazivTipaSmene = "posao";
        $ts2->save();
    }
       
}
