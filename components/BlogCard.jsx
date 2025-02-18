import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
    >
      <img
        src={post.path}
        alt={post.title}
        className="w-full h-52 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold text-gray-800 mt-4">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <Link href={`/blogs/${post.slug}`}>
        <span className="text-gray-900 hover:text-[#2e294e] hover:scale-105 mt-4 inline-block hover:underline cursor-pointer">
          Read More →
        </span>
      </Link>
    </div>
  );
};

export default BlogCard;
