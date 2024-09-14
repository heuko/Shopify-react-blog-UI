import React from "react";
import Shopify from "shopify-api-node";

interface BlogUIProps {
  posts: Shopify.IArticle[];
}

const BlogUI: React.FC<BlogUIProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-2">
                By {post.author || "Unknown"} on{" "}
                {new Date(post.created_at).toISOString().split("T")[0]}
              </p>
              <div
                className="text-gray-700 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.body_html }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogUI;