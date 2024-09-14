import Shopify from 'shopify-api-node';

class ShopifyClient {
  private shopify: Shopify;

  constructor() {
    const shopName = process.env.SHOP_NAME;
    const apiKey = process.env.SHOPIFY_API_KEY;
    const password = process.env.SHOPIFY_PASSWORD;

    // Check if all required environment variables are available
    if (!shopName || !apiKey || !password) {
      throw new Error(
        'Missing required environment variables: SHOP_NAME, SHOPIFY_API_KEY, or SHOPIFY_PASSWORD.'
      );
    }

    // Initialize the Shopify API client with credentials from the environment
    this.shopify = new Shopify({
      shopName: shopName,
      apiKey: apiKey,
      password: password,
    });
  }

  // Function to get a list of blogs
  async getBlogs() {
    try {
      const blogs = await this.shopify.blog.list();
      return blogs;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }

  // Function to get a list of posts by blog ID with page and limit
  async getPostsByBlogId(blogId: number, page: number = 1, limit: number = 10) {
    try {
      let params: { limit: number; status: string } | undefined = {
        limit,
        status: 'any',
      };

      let allPosts = [];
      let articles;
      let currentPage = 1;

      // Keep fetching articles until we reach the requested page
      do {
        articles = await this.shopify.article.list(blogId, params);
        params = articles.nextPageParameters; // Get next page parameters

        if (currentPage === page) {
          // If we've reached the desired page, append the posts
          allPosts = allPosts.concat(articles);
        }

        currentPage++;
      } while (params && currentPage <= page); // Continue if there's a next page and we haven't reached the desired page

      return allPosts;
    } catch (error) {
      console.error(`Error fetching posts for blog ID ${blogId}:`, error);
      throw error;
    }
  }
}

export default ShopifyClient;