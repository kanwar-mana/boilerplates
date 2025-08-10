# Next.js Boilerplate

A modern, production-ready boilerplate for building web applications with Next.js 14, shadcn/ui, Tailwind CSS, and Redux Toolkit.

## Features

- ⚡ **Next.js 14** - Latest version with App Router and Server Components
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **TypeScript** - Type safety and better developer experience
- 🎪 **shadcn/ui** - Beautiful, accessible components built with Radix UI
- 🏪 **Redux Toolkit** - Efficient state management with modern Redux
- 📱 **Responsive Design** - Mobile-first responsive design
- 🧹 **ESLint** - Code linting for consistency
- 🔧 **Modern Development** - Hot reloading and fast refresh

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI + Tailwind)
- **State Management:** Redux Toolkit
- **Icons:** Lucide React
- **Development:** ESLint

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser and visit:** `http://localhost:3000`

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── providers.tsx     # Redux provider
│   └── counter-demo.tsx  # Redux demo component
├── config/               # Configuration files
│   └── site.ts          # Site configuration
├── lib/                  # Utility functions and setup
│   ├── features/        # Redux slices
│   ├── store.ts         # Redux store configuration
│   └── utils.ts         # Utility functions
├── styles/              # Global styles
│   └── globals.css      # Global CSS with Tailwind
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## License

MIT License - feel free to use this boilerplate for your projects!
- [x] Dark mode

## Known Issues

A list of things not working right now:

1. ~GitHub authentication (use email)~
2. ~[Prisma: Error: ENOENT: no such file or directory, open '/var/task/.next/server/chunks/schema.prisma'](https://github.com/prisma/prisma/issues/16117)~
3. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~
4. [Cannot use opengraph-image.tsx inside catch-all routes](https://github.com/vercel/next.js/issues/48162)

## Why not tRPC, Turborepo or X?

I might add this later. For now, I want to see how far we can get using Next.js only.

If you have some suggestions, feel free to create an issue.

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
