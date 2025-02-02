import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import User from "../../models/User"; // Adjust the path to your User model

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();

    // Find user by email
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Validate password (simple comparison, no hashing)
    if (body.password !== user.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Return success
    return NextResponse.json({ message: "Login successful", user }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
