<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmenasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('smenas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('radnikID');
            $table->date('datum')->default('1987-4-6') ; ;
            $table->foreignId('tipSmeneID');
            $table->integer('pocetak'); //u koliko sati je radnik krenuo da radi (klizno radno vreme)


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('smenas');
    }
}
