"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {

    const [token, setToken] = useState("");

    const [verified, setVerified] = useState(false);

    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(true);

    const verifyUserEmail = async () => {

        try {

            await axios.post(
                "/api/users/verifyemail",
                { token }
            );

            setVerified(true);

        } catch (error: any) {

            setError(true);

            console.log(error.response?.data);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        const params = new URLSearchParams(
            window.location.search
        );

        const urlToken = params.get("token");

        setToken(urlToken || "");

    }, []);

    useEffect(() => {

        if (token.length > 0) {
            verifyUserEmail();
        }

    }, [token]);

    return (

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

                <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
                    Verify Email
                </h1>

                <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>

                {/* Loading */}
                {loading && (

                    <div>

                        <p className="text-gray-300 text-lg animate-pulse">
                            Verifying your email...
                        </p>

                    </div>

                )}

                {/* Success */}
                {verified && (

                    <div className="space-y-4">

                        <h2 className="text-2xl font-bold text-green-400">
                            Email Verified Successfully
                        </h2>

                        <Link
                            href="/login"
                            className="inline-block px-6 py-3 bg-orange-400 text-black font-bold rounded-xl hover:scale-105 transition duration-300"
                        >
                            Go to Login
                        </Link>

                    </div>

                )}

                {/* Error */}
                {error && (

                    <div className="space-y-4">

                        <h2 className="text-2xl font-bold text-red-400">
                            Invalid or Expired Token
                        </h2>

                        <p className="text-gray-300">
                            Please try signing up again.
                        </p>

                    </div>

                )}

                {/* Token Display */}
                {
                    token && (
                        <div className="mt-6 p-3 bg-black/30 rounded-xl border border-white/10">

                            <p className="text-xs text-gray-400 mb-1">
                                Verification Token
                            </p>

                            <p className="text-sm text-orange-300 break-all">
                                {token}
                            </p>

                        </div>
                    )
                }

            </div>

        </div>
    );
}