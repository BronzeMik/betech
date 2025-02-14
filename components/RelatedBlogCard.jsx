import Link from "next/link";

export default function RelatedBlogCard({ relatedPosts }) {
  return (
    <div className="bg-[#141122] text-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Related Blogs</h2>
      <ul className="space-y-4">
        {relatedPosts.map((post) => (
          <li key={post.slug} className="border-b border-gray-600 pb-2">
            <Link href={`/blogs/${post.slug}`} className="hover:text-gray-300 transition duration-300">
              <div className="flex items-start gap-4">
                <img src={post.cover} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="text-md font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
