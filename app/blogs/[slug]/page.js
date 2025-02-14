import RelatedBlogCard from "@/components/RelatedBlogCard";
import { getBlogPost, getRelatedPosts, getBlogPosts } from "@/lib/notion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({ params }) {
  const slug = (await params)?.slug;

  if (!slug) {
    console.error("🚨 Params are missing or undefined.");
    return (
      <p className="text-center text-xl">
        Blog not found! Try refreshing the page.
      </p>
    );
  }

  console.log("🔍 Requested slug:", slug);

  const post = await getBlogPost(slug);



  if (!post) {
    console.error(`🚨 No post found for slug: ${slug}`);
    return (
      <p className="text-center text-xl">
        Blog not found! Try refreshing the page.
      </p>
    );
  }

  const allPosts = await getBlogPosts(); // Fetch all blog posts from Notion

  const relatedPosts = await getRelatedPosts(slug, post.tags, allPosts); // Use `post.tags` from current post


  return (
    <div className="container mx-auto mt-36 px-4 py-10">
      {/* Post Header */}
      <div className="w-full flex flex-col items-center text-center">
        <Image
          src={post.cover}
          alt={post.title}
          width={500}
          height={500}
          className="object-cover rounded-xl"
          unoptimized
        />
        <h1 className="text-4xl font-bold text-gray-800 my-6">{post.title}</h1>
      </div>

      {/* Content & Sidebar */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* Main Content */}
        <div className="mt-6 prose prose-lg px-5 flex-[3] max-w-none">
          <ReactMarkdown className="w-full">{post.content}</ReactMarkdown>
        </div>

        {/* Sidebar - Sticks to top when scrolling */}
       {relatedPosts.length > 0 && <div className="text-gray-700 bg-[#141122] rounded-lg shadow-lg p-6 md:flex-1 md:h-screen md:sticky md:top-[80px] md:right-0">
          <p className="text-white">
            <RelatedBlogCard relatedPosts={relatedPosts} />
          </p>
        </div>}
      </div>
    </div>
  );
}
