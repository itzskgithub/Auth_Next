import User from "@/models/userModel.models";
import { connect } from "@/dbConfig/dbConfig";

connect();

export default async function UserProfile({
    params,
}: {
    params: { id: string };
}) {

    const user = await User.findById(params.id)
        .select("-password");

    return (

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 px-4">

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

                <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
                    User Profile
                </h1>

                <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full mb-6"></div>

                <p className="text-white text-xl">
                    Username: {user.username}
                </p>

                <p className="text-white text-xl">
                    Id: {user._id}
                </p>

                <p className="text-white text-xl mt-4">
                    Email: {user.email}
                </p>

            </div>

        </div>
    );
}