<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = $request->user();
        $user->tokens()->delete();

        $accessTokenExpiresAt = Carbon::now()->addMinutes(5);
        $refreshTokenExpiresAt = Carbon::now()->addDays(1);

        $accessToken = $user->createToken('access_token', ['*'], $accessTokenExpiresAt)->plainTextToken;
        $refreshToken = $user->createToken('refresh_token', ['refresh'], $refreshTokenExpiresAt)->plainTextToken;

        $cookie = cookie(
            'refresh_token',
            $refreshToken,
            $refreshTokenExpiresAt->timestamp,
            '/',
            null,
            false,
            true,
            false,
            'Strict',
        );

        return response()->json([
            'access_token' => $accessToken,
            'access_exp' => $accessTokenExpiresAt,
            'token_type' => 'Bearer',
        ])->withCookie($cookie);
    }

    public function refresh(Request $request)
    {
        $refreshToken = $request->cookie('refresh_token');

        if (!$refreshToken) {
            return response()->json(['message' => 'Refresh token tidak ditemukan'], 401);
        }

        $token = PersonalAccessToken::findToken($refreshToken);

        $user = $token->tokenable;
        Auth::login($user);

        $token->delete();

        $accessTokenExpiresAt = Carbon::now()->addDays(1);
        $refreshTokenExpiresAt = Carbon::now()->addDays(7);

        $newAccessToken = $user->createToken('access_token', ['*'], $accessTokenExpiresAt)->plainTextToken;
        $newRefreshToken = $user->createToken('refresh_token', ['refresh'], $refreshTokenExpiresAt)->plainTextToken;

        $cookie = cookie(
            'refresh_token',
            $newRefreshToken,
            $refreshTokenExpiresAt->timestamp,
            '/',
            null,
            false,
            true,
            false,
            'Strict',
        );

        return response()->json([
            'access_token' => $newAccessToken,
            'access_exp' => $accessTokenExpiresAt,
            'token_type' => 'Bearer',
        ])->withCookie($cookie);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
