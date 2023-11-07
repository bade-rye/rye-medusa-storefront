

## Setting up the environment variables

Navigate into your projects directory and get your environment variables ready:
1. Create a `.env.local` file
2. Add the below contents to it

```
# Your Medusa backend, should be updated to where you are hosting your server. Remember to update CORS settings for your server. See – https://docs.medusajs.com/usage/configurations#storefront-cors
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_RYE_API_HEADER=http://localhost:9000
NEXT_RYE_AUTH_HEADER="Basic ${TOKEN}"
NEXT_PUBLIC_RYE_PAY_TOKEN="${TOKEN}"

# Your store URL, should be updated to where you are hosting your storefront.
NEXT_PUBLIC_BASE_URL=http://localhost:8000

# Posgres URL for your Medusa DB for the Product Module. See - https://docs.medusajs.com/modules/products/serverless-module
POSTGRES_URL=postgres://postgres:postgres@localhost:5432/medusa

# Your Stripe public key. See – https://docs.medusajs.com/add-plugins/stripe
NEXT_PUBLIC_STRIPE_KEY=

# Your PayPal Client ID. See – https://docs.medusajs.com/add-plugins/paypal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=

# Your MeiliSearch / Algolia keys. See – https://docs.medusajs.com/add-plugins/meilisearch or https://docs.medusajs.com/add-plugins/algolia
NEXT_PUBLIC_SEARCH_APP_ID=
NEXT_PUBLIC_SEARCH_ENDPOINT=http://127.0.0.1:7700
NEXT_PUBLIC_SEARCH_API_KEY=
NEXT_PUBLIC_INDEX_NAME=products

# Your Next.js revalidation secret. See – https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
REVALIDATE_SECRET=supersecret
```

### Install dependencies

Use npm to install all dependencies.

```shell
npm install
```

### Start developing

You are now ready to start up your project.

```shell
npm run dev
```

### Open the code and start customizing

Your site is now running at http://localhost:8000!

Edit `/pages/index.tsx` to see your site update in real-time!

Make sure the Medusa backend is running, then start (or restart) your Next.js storefront.


