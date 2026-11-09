# Chuks Kitchen

A responsive food ordering and delivery web app built with React and Vite. Customers can browse meals, add items to a cart, review their order, and complete a checkout flow designed for a modern restaurant experience.

## Overview

Chuks Kitchen is a front-end ordering application for a Nigerian food brand, focused on quick browsing, smooth cart management, and a clean checkout journey. The app includes a homepage, an explore section, cart updates, order tracking, payment flow, and account/order history views.

## Features

- Restaurant-style homepage with featured meals and food categories
- Search and discover meals in the Explore page
- Add items to cart with quantity controls
- Persist cart data using localStorage
- Cart summary and checkout flow
- Payment page and order confirmation screen
- My Orders and Account sections
- Responsive navigation with mobile-friendly menu

## Tech Stack

- React 19
- Vite
- React Router DOM
- react-icons
- ESLint

## Project Structure

```bash
chukks-react/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, typically:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Runs the app in development mode.

```bash
npm run build
```
Builds the project for production.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs ESLint checks across the project.

```bash
npm run deploy
```
Deploys the production build to GitHub Pages using the configured `gh-pages` setup.

## Deployment

This project includes a homepage URL and deployment script in the package configuration, making it ready to publish through GitHub Pages.

## Notes

- Cart items are saved in browser localStorage so the cart remains available across refreshes.
- The app is designed as a front-end experience and uses mock order/account data for demonstration.

## License

This project is for educational and portfolio use. Check the repository license before using it commercially.
