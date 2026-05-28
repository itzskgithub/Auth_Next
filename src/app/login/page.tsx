"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
        console.log("Login clicked");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">

                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login
                </h1>

                

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        placeholder="Enter password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={onLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    New User?{" "}
                    <Link
                        href="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
}