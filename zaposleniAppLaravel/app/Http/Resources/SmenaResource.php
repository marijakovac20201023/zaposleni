<?php

namespace App\Http\Resources;
 
use App\Models\TipSmene;
use App\Models\User;
 
use Illuminate\Http\Resources\Json\JsonResource;

class SmenaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'radnik' => new UserResource(User::find($this->resource->radnikID)),
           
            'tip_smene' =>new TipSmeneResource(TipSmene::find( $this->resource->tipSmeneID)),
           'datum' =>$this->resource->datum
            
 
        ];
    }
}
