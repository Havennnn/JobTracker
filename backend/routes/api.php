<?php

use App\Http\Controllers\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Job;

Route::get('jobs', [JobController::class, 'index'])->name('jobs.index');

Route::post('jobs', [JobController::class, 'store'])->name('jobs.store');

Route::get('jobs/{id}', [JobController::class, 'show'])->name('jobs.show');

Route::put('jobs/{id}', [JobController::class, 'update'])->name('jobs.update');

Route::delete('jobs/{id}', [JobController::class, 'destroy'])->name('jobs.destroy');
