import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb"
import User from "../../models/User"
    export async function POST(req: Request) {
        try {
          const body = await req.json();
          await dbConnect();
      
          // Check if user exists
          const existingUser = await User.findOne({ email: body.email });
          if (existingUser) {
            return NextResponse.json({ error: "Email already registered" }, { status: 400 });
          }
      
          // Validate password length
          if (!body.password || body.password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
          }
      
          const user = await User.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            password: body.password, // Make sure to hash passwords before storing
            consultantId: body.consultantId,
          });
      
          return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
        } catch (error: any) {
          console.error("Signup error:", error);
      
          // Return validation errors from Mongoose
          if (error.name === "ValidationError") {
            return NextResponse.json({ error: error.message }, { status: 400 });
          }
      
          return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }
      }
      