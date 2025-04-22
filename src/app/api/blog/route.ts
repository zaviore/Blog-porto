/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/app/api/blogs/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/libs/client";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  try {
    const blogs = await db.collection("blogs").find({}).toArray();
    return NextResponse.json(blogs);
  } catch (error:any) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
