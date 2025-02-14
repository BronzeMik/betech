import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/notion";
import Link from "next/link";

export default async function BlogList() {
  const posts = await getBlogPosts(); 
  return (
    <div className="container pt-44 px-4 bg-[#141122]">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
