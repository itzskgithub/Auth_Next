import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModel.models';
import { url } from "inspector";

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {token} = reqBody;
        console.log(token);
        const user = await User.findOne({verifyToken: token,
            verifyTokenExpiry: {$gt: Date.now()}
        });

        if(!user){
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json(
            {
            message: "Email verified successful",
            success: true
            }
        );

    } catch (error:any) {
        throw new Error(error.message);
    }
}

