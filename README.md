# PrintForge

Your go-to platform for 3D printing files. Discover what's possible with 3D
printing and join our community of creators exploring a vast library of
user-submitted models.

## Features

- **Extensive Model Library**: Browse through 50+ 3D printing models across 10
  different categories
- **Category Filtering**: Organized models by categories including:
  - 3D Printer parts and upgrades
  - Art and decorative pieces
  - Educational models
  - Fashion accessories
  - Hobby & DIY projects
  - Household items
  - Miniatures for gaming
  - Props & Cosplay
  - Tools and utilities
  - Toys & Games
- **Model Details**: View detailed information, likes, and descriptions for each
  model
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Modern UI**: Built with Tailwind CSS and Radix UI components

## Tech Stack

- **Framework**: Next.js 16.1.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── shared/         # Shared components (Navbar)
│   └── ui/             # UI primitives and styled components
│   ├── pages/              # Page components
├── data/               # Static data files
├── lib/                # Utility functions
└── services/           # API and service functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and not licensed for public use.
