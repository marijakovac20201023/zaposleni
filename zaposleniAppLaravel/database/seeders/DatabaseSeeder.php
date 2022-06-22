<?php

namespace Database\Seeders;

use App\Models\DanUNedelji;
use App\Models\Kvalifikacija;
use App\Models\Smena;
use App\Models\SSS;
use App\Models\TipSmene;
use App\Models\User;
use App\Models\VrstaSmene;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Smena::truncate();
 
        TipSmene::truncate();
 


        User::truncate();
        Kvalifikacija::truncate();

        User::factory(10)->create();
                      //kreiracemo ovde admina
                      $admin = new User();
                      $admin->name="Admin";
                      $admin->email="admin@gmail.com";
                      $admin->password= Hash::make("admin");
                      $admin->admin = 1;
                     $admin->save();


 

       $tss = new TipSmeneSeeder();
       $tss->run();


        $ss =  new SmenaSeeder();
        $ss->run();

        $sss1 = new Kvalifikacija();
       
        $sss1->nazivKvalifikacije ="Bez kvalifikacije";
        $sss1->save();

        $sss2  = new Kvalifikacija();
       
        $sss2->nazivKvalifikacije ="Opsta kvalifikacija";
        $sss2->save();


        
        $sss3 = new Kvalifikacija();
       
        $sss3->nazivKvalifikacije ="Strucna kvalifikacije";
        $sss3->save();

        
        $sss4 = new Kvalifikacija();
      
        $sss4->nazivKvalifikacije ="Akademska kvalifikacije";
        $sss4->save();
        
        
        $sss5 = new Kvalifikacija();
       
        $sss5->nazivKvalifikacije ="Strukovna kvalifikacije";
        $sss5->save();


    }
}
