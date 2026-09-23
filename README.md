This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Runtime

This project targets Node.js 24 LTS and npm 10 or newer:

```bash
nvm install
nvm use
```

The exact recommended Node.js version is stored in `.nvmrc`.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Clerk authentication and billing
- Convex database and backend functions
- Fabric.js canvas editor
- ImageKit image hosting and transformations
- Unsplash background image search

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Main Routes

- `/` — public landing page
- `/dashboard` — authenticated project dashboard
- `/editor/[projectId]` — image editor
- `/sign-in` — Clerk sign-in
- `/sign-up` — Clerk sign-up
- `/api/imagekit/upload` — authenticated image upload endpoint

## Environment Variables

Create a local `.env.local` file with the credentials for:

- Clerk
- Convex
- ImageKit
- Unsplash (`NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`, optional)

Never commit `.env.local` or any secret-bearing credentials.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
