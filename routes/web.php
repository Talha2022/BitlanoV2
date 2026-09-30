<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/contact', 'contact')->name('contact');

Route::get('/expertise/{service}', function ($service) {
    return inertia('subservice', ['slug' => $service]);
})->name('expertise.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
