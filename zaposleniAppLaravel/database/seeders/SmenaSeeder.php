<?php

namespace Database\Seeders;

use App\Models\Smena;
use Illuminate\Database\Seeder;

class SmenaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $s1 =  new Smena();
        $s1->radnikID = 1;
        $s1->datum='2022-06-26';
        $s1->tipSmeneID = 1;
        $s1->pocetak = 10;
 
        $s1->save();


        $s2 =  new Smena();
        $s2->radnikID = 2;
        $s2->datum='2022-06-27';
        $s2->tipSmeneID =2;
        $s2->pocetak = 12;
       
        $s2->save();

        
        $s3 =  new Smena();
        $s3->radnikID = 2;
        $s3->datum='2022-06-30';
        $s3->tipSmeneID =1;
        $s3->pocetak = 8;
       
        $s3->save();
         

        
    }
}
