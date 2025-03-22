# Movie Explorer Web App

A modern React application for exploring movies and people in the film industry. This project uses The Movie Database (TMDB) API to fetch and display information about movies, actors, and more.

## Features

- Browse popular and trending movies
- Search for specific movies and people
- View detailed information about movies including cast, crew, and related content
- Explore information about actors, directors, and other film industry professionals
- Responsive design for optimal viewing on any device

## Technologies

- React 19
- Redux Toolkit for state management
- React Router for navigation
- Material UI for component styling
- Axios for API requests
- Vite for fast development and building
- Jest for testing

## Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd movie-explorer-web-app
   ```

2. Copy the **.env.example** file to **.env** and update the API key:
   ```
   cp .env.example .env
   ```
   Open **.env** in your favorite editor and replace the placeholder with your API key, for example:
   ```
   VITE_API_KEY=your_api_key_here
   ```
   
3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run Jest tests
