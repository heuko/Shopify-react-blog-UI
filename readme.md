### README.md

# Shopify React Blog UI

`Shopify-react-blog-UI` is a reusable React component for creating blog-style layouts. It is compatible with both Next.js and server-side rendering (SSR).

## Features

- **Next.js Compatibility**: Works seamlessly with Next.js, supporting both client-side and server-side rendering (SSR).
- **Customizable**: Easily customizable to fit your blog's needs.
- **TypeScript**: Built with TypeScript to provide type safety.
  
## Installation

To install the package in your Next.js or React project, run:

```bash
npm install shopify-react-blog-ui
```

or with Yarn:

```bash
yarn add shopify-react-blog-ui
```

## Getting Started

Here’s how you can quickly get started with the `Shopify-react-blog-UI` package in your Next.js or React project:

1. **Install the package** using npm or yarn as shown above.
2. **Use the BlogUI component** in your project:

### Example in Next.js

```tsx
// pages/index.tsx
import React from 'react';
import BlogUI from 'shopify-react-blog-ui';

const Home = () => {
  return (
    <BlogUI
      title="Welcome to My Blog"
      content="This is an example blog using the Shopify React Blog UI component!"
    />
  );
};

export default Home;
```

### Props

The `BlogUI` component accepts the following props:

- `title`: (string) - The title of your blog post.
- `content`: (string) - The content of your blog post.

Example usage:

```tsx
<BlogUI
  title="Understanding Server-Side Rendering"
  content="Server-side rendering is a key part of building performant web applications..."
/>
```

### Server-Side Rendering (SSR)

To use this component with SSR in Next.js, you don’t need to do anything special; Next.js will handle server-side rendering for you.

## Development

If you want to contribute to this package or modify it, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shopify-react-blog-ui.git
cd shopify-react-blog-ui
```

### 2. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### 3. Build the Project

To build the project, run:

```bash
npm run build
```

This will bundle the project using Rollup and output the files to the `dist/` directory.

### 4. Test the Project Locally

To test your changes locally, you can link the package in another project:

```bash
npm link
cd ../your-other-project
npm link shopify-react-blog-ui
```

### 5. Running Tests

You can write and run tests to ensure your component is working as expected. Currently, the tests can be run using:

```bash
npm run test
```

## Publishing to npm

If you're ready to publish your changes to npm, follow these steps:

### 1. Login to npm

Make sure you're logged in to npm:

```bash
npm login
```

### 2. Update the Version

Make sure to update the version in `package.json` following semantic versioning (e.g., `1.0.0`, `1.0.1` for patches, etc.):

```json
{
  "version": "1.0.1"
}
```

### 3. Build the Project

Run the build command to generate the bundled files in the `dist/` directory:

```bash
npm run build
```

### 4. Publish to npm

Finally, publish your package:

```bash
npm publish --access public
```

This will publish the package as a public package to the npm registry. Make sure the package name in `package.json` is unique on npm.

### 5. Verify Your Package

After publishing, verify your package is live on npm by visiting:

```bash
https://www.npmjs.com/package/shopify-react-blog-ui
```

## Contributing

Contributions are welcome! Please open an issue or a pull request to discuss changes and improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Key Sections:
1. **Installation**: Explains how to install the package.
2. **Getting Started**: Shows a quick example of using the `BlogUI` component.
3. **Development**: Describes how to clone, develop, and test the package.
4. **Publishing to npm**: Steps to publish the package.
5. **Contributing**: Instructions on contributing to the project.
6. **License**: Specifies the license.

You can customize the instructions further based on your project needs. Let me know if you need any other changes!