export default function ProfilePage() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4 pt-24">

            {/* Logout Button */}
            <button className="absolute top-6 right-6 px-5 py-2 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition duration-300">
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
                </div>

                <div className="mt-8">
                    <button className="px-6 py-2 bg-white text-black rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
                        View Details
                    </button>
                </div>

            </div>
        </div>
    );
}