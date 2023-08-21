import { saveUsers } from "@/handlers/handler";
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    try {

        let body = await req.json();
        saveUsers(body);
        return NextResponse.json({
            success: true,
            message: "User Created Sucessfully",
            status: 201
        });
    }
    catch (err) {
        return NextResponse.json({
            message: err.message,
        })
    }
}