import React from "react";
import BlogUI from "../components/BlogUI";
import ShopifyClient from "../utils/ShopifyClient";
import { GetServerSideProps } from "next";

interface BlogPageProps {
  posts: BlogPost[];
}

interface BlogPost {
  id: number;
  title: string;
  body_html: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <div>
      <BlogUI posts={posts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const shopifyClient = new ShopifyClient();
  const blogId = 56203935803; // Replace with the actual blog ID
  const limit = 5; // Replace with dynamic values if necessary
  const page = 1;
  let posts = [];

  try {
    posts = await shopifyClient.getPostsByBlogId(blogId, page, limit);
  } catch (error) {
    console.error("Failed to fetch blog posts", error);
  }

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
