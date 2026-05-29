import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import {connect} from '@/dbConfig/dbConfig';
import User from "@/models/userModel.models";
connect();

export async function GET(request: NextRequest){
    try {
        const userDetail = await getDataFromToken(request);
        const user = await User.findOne({_id: userDetail.id}).select("-password");

        return NextResponse.json(
            {message: "User found",
            data : user}
        )
    } catch (error: any) {
        return NextResponse.json(
            {error: error.message},
            {status: 400}
        );
    }
}