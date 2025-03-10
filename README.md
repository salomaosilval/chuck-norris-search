# Chuck Norris Jokes Search Engine

A modern web application for searching and discovering Chuck Norris jokes using the [ChuckNorris.io API](https://api.chucknorris.io/).

## Features

- **Search Interface**: Search for Chuck Norris jokes with a user-friendly interface
- **"I'm Feeling Lucky" Button**: Get a random Chuck Norris joke with one click
- **Highlighted Search Terms**: Search terms are highlighted in the results for better visibility
- **Responsive Design**: Works well on both desktop and mobile devices
- **Dark/Light Mode**: Supports both dark and light themes with system preference detection
- **Detailed Joke Information**: Displays comprehensive information about each joke

## Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: React Query, Axios
- **State Management**: React Hooks
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- Yarn or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chuck-norris-search.git
   cd chuck-norris-search
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
chuck-norris-search/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── providers/          # Context providers
│   ├── services/           # API services
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Code Organization

- **Components**: Reusable UI components following a component-based architecture
- **Hooks**: Custom hooks for encapsulating and reusing stateful logic
- **Providers**: Context providers for theme and data fetching
- **Services**: API service layer for interacting with the ChuckNorris.io API

## Design Decisions

- **Component Pattern**: Each component is in its own file with a clear, single responsibility
- **Custom Hooks**: Business logic is separated from UI components using custom hooks
- **TypeScript**: Strong typing throughout the application for better developer experience and fewer bugs
- **Responsive Design**: Mobile-first approach with Tailwind CSS for responsive layouts
- **Accessibility**: Semantic HTML and proper ARIA attributes for better accessibility

## Building for Production

```bash
yarn build
# or
npm run build
```

## Running Production Build

```bash
yarn start
# or
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [ChuckNorris.io](https://api.chucknorris.io/) for providing the free API
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Query](https://tanstack.com/query/latest) for data fetching and caching
- [Axios](https://axios-http.com/) for HTTP requests
