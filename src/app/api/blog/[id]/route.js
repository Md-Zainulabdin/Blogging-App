import { deleteBlog, getBlogById, updateBlog } from "@/handlers/handler";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
    let id = content.params.id;
    getBlogById(id);
    return NextResponse.json({
        message: "Sucess",
        status: 200,
    })
}

export const PUT = async (req, content) => {
    let data = await req.json();
    let id = content.params.id;
    updateBlog(data, id)
    return NextResponse.json({
        result: data,
        success: true,
    })
}   

export const DELETE = async (req, content) => {
    let id = content.params.id;
    deleteBlog(id);
    return NextResponse.json({
        success: true,
        message: "blog deleted"
    })
}