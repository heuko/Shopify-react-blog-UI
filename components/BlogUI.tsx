import React from "react";

interface BlogUIProps {
  posts: BlogPost[];
}

interface BlogPost {
  id: number;
  title: string;
  body_html: string;
}

const BlogUI: React.FC<BlogUIProps> = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogUI;