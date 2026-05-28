export default async function UserProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

                <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
                    User Profile
                </h1>

                <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>

                <p className="text-gray-300 text-lg mb-3">
                    Welcome to your profile page
                </p>

                <div className="inline-block mt-2 px-6 py-3 bg-orange-400 text-black text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    {id}
                </div>

                <div className="mt-8">
                    <button className="px-6 py-2 bg-white text-black rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
                        Edit Profile
                    </button>
                </div>

            </div>
        </div>
    );
}