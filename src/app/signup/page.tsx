"use client";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("signup success", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };
 

    useEffect(() => {
        if(
            user.email.length > 0 && 
            user.password.length > 0 &&
            user.username.length > 0
        ){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
        
    }, [user]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">

                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    {loading ? "Processing" : "Signup"}
                </h1>

                {/* Username */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Username
                    </label>

                    <input
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) =>
                            setUser({ ...user, username: e.target.value })
                        }
                        placeholder="Enter username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                </div>

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
                    onClick={onSignup}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    {buttonDisabled ? "Fill the details" : "Sign Up"}
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}