"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
export default function ProfilePage() {

    const [data, setData] = useState<any>(null);

    const router = useRouter();

    const getUserDetail = async () => {
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data);
    }

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successfully");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4 pt-24">

            {/* Logout Button */}
            <button
                onClick={logout}
                className="absolute top-6 right-6 px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition duration-300">
                Logout
            </button>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

                <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
                    Profile
                </h1>

                <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>

                <p className="text-gray-300 text-lg mb-6">
                    Welcome to your profile dashboard
                </p>

                <div className="inline-block px-6 py-3 bg-orange-400 text-black text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    Profile Page

                    <h2>
                        {
                            data ? (
                                <div className="mt-4 text-white">

                                    <Link
                                        href={`/profile/${data._id}`}
                                        className="text-2xl font-bold"
                                    >
                                        
                                        Name : {data.username}
                                    
                                    </Link>

                                    <p className="mt-2">
                                        Email: {data.email}
                                    </p>

                                    <p className="mt-2 break-all">
                                        ID: {data._id}
                                    </p>

                                </div>
                            ) : (
                                "Nothing"
                            )
                        }
                    </h2>
                </div>

                <div className="mt-8">
                    <button
                        onClick={getUserDetail}
                        className="px-6 py-2 bg-white text-black rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    );
}