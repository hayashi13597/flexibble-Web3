import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(request: Request) {
  const { path } = await request.json();
  try {
    const deleted = await cloudinary.api.delete_resources([path], {
      type: "upload",
      resource_type: "image",
    });
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete image on Cloudinary" },
      { status: 500 }
    );
  }
}
