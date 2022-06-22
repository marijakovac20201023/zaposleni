<?php

namespace App\Http\Resources;

use App\Models\Kvalifikacija;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  
        [
        'id' => $this->resource->id,
            'name' => $this->resource->name,
            'email'     => $this->resource->email,
            'phone' => $this->resource->phone,
            'birthdate' => $this->resource->birthdate,
            'mesto' => $this->resource->mesto,
            'kvalifikacija' =>Kvalifikacija::find($this->resource->kvalifikacijaID),
            'mesto' => $this->resource->mesto,
            'plata' => $this->resource->plata,



        ];
    }
}
