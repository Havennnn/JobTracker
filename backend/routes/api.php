<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Job;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('jobs', function () {
    return Job::all();
});

Route::post('jobs', function (Request $request) {
    $job = Job::create($request->all());
    return response()->json($job, 201);
});

Route::get('jobs/{id}', function ($id) {
    return Job::findOrFail($id);
});

Route::put('jobs/{id}', function (Request $request, $id) {
    $job = Job::findOrFail($id);
    $job->update($request->all());
    return $job;
});

Route::delete('jobs/{id}', function ($id) {
    $job = Job::findOrFail($id);
    $job->delete();
    return response()->json(['message' => 'Job deleted successfully']);
});
