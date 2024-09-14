import React from 'react';

interface BlogUIProps {
  title: string;
  content: string;
}

const BlogUI: React.FC<BlogUIProps> = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default BlogUI;