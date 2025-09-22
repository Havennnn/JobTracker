<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Job extends Model
{
    protected $table = 'job_tracking';

    protected $fillable = [
        'company',
        'position',
        'link',
        'date',
        'status',
        'notes',
    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function getDateAttribute($value)
    {
        return Carbon::parse($value)->format('m-d-Y');
    }
}
