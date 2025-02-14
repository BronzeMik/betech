import { NextResponse } from "next/server";
import { getBlogPosts } from "@/lib/notion";

export async function GET() {
  try {
    const blogPosts = await getBlogPosts();
    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error("🚨 API Error fetching blog posts:", error);
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}
