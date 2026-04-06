# NFT Marketplace UI

A front-end for an NFT marketplace built with Next.js. The home page presents marketing sections such as hero, bidding highlights, featured creators, crypto-related content, contact, and video. The collection page shows a sample collection layout with placeholder market statistics. Wallet connection is wired through RainbowKit and wagmi for Ethereum-compatible networks.

## Tech stack

- Next.js with the Pages Router and TypeScript
- React 17
- Tailwind CSS for utility styling
- Material UI (MUI) v5 with Emotion for components and theming
- RainbowKit and wagmi with ethers for Web3 wallet connectivity
- Prettier with the Tailwind plugin for formatting

## Prerequisites

- Node.js and a package manager (npm, Yarn, or pnpm)

## Environment variables

Create a `.env.local` file in the project root and set:

- `ALCHEMY_ID` — Alchemy API key used by wagmi’s Alchemy provider alongside the public fallback. Without it, RPC behavior may be limited depending on network usage.

## Install and run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Run the production server after a build:

```bash
npm start
```

Yarn or pnpm equivalents work if you prefer those lockfiles or workflows.

## Routes

- `/` — Main landing page with header, hero, bid section, creators, crypto section, contact, video, and footer.
- `/collection` — Collection detail-style page with banner, social placeholders, and mock metrics (floor price, volume, latest price).

## Web3 configuration

`_app.tsx` configures wagmi for Ethereum mainnet, Polygon, Optimism, and Arbitrum, with RainbowKit’s default wallets and midnight theme. Auto-connect is disabled; users connect explicitly via the connect button in the header.

## Project layout

- `pages/` — Next.js routes and `_app.tsx` global providers
- `components/` — UI sections (Header, Hero, Bid, Creators, Crypto, Contact, Video, Footer, and related pieces)
- `public/images/` — Static image assets referenced by the UI
- `styles/globals.css` — Global styles including Tailwind layers
- `theme/theme.js` — MUI theme
- `tailwind.config.js` — Tailwind configuration

## Notes

- Listing and collection numbers on the pages are illustrative; integrate your own APIs or smart contracts for real data.
- The RainbowKit app name in code is still the default string; rename it when you brand the product.
