<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
          'name' => $validatedData['name'],
          'email' => $validatedData['email'],
          'password' => Hash::make($validatedData['password']),
        ]);
        
      return response([
        'message' => 'User registered successfully',
        'user' => $user,
      ], 201);
    }
}
