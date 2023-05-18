# CRUD Web Application

<!--toc:start-->

- [CRUD Web Application](#crud-web-application)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  <!--toc:end-->

This repository contains a CRUD (Create, Read, Update, Delete) web application built using the following technologies:

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/): A fake REST API for testing and prototyping.
- [Vite](https://vitejs.dev/): A fast development build tool that supports React and other modern web technologies.
- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [Chakra](https://chakra-ui.com/) UI: A simple, modular, and accessible UI component library for React.
- [React Hook Form](https://www.react-hook-form.com/): A flexible and performant form library for React.
- [React Query](https://tanstack.com/query/latest/docs/react/overview): A data-fetching library for React that provides a powerful caching, synchronization, and error handling mechanism.
- [Axios](https://axios-http.com/): A popular HTTP client library for making API requests in JavaScript and Node.js.
- [usehooks-ts](https://usehooks-ts.com/): A collection of reusable React hooks written in TypeScript.
- [pnpm](https://pnpm.io/): A fast, disk space-efficient package manager for JavaScript.

## Features

The CRUD web application includes the following features:

- Fetching a list of posts from the JSONPlaceholder API.
- Creating a new post.
- Updating an existing post.
- Deleting a post.
- Displaying detailed information about a post.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/your-username/your-repository.git
```

2. Change into the project directory:

```sh
   cd your-repository
```

3. Install the dependencies using pnpm:

```sh
   pnpm install
```

4. Start the development server:

```sh
   pnpm dev
```

The application should now be running at http://localhost:5173.

## Folder Structure

```
├── public/
└── src/
    ├── components/
    ├── pages/
    ├── hooks/
    ├── lib/
    ├── App.tsx
    ├── Main.tsx
```

The project follows a typical folder structure for a React application with Vite:

- `public/`: This directory contains the static assets and HTML template for the application. It typically includes the `index.html` file and other assets like images, icons, or fonts.

- `src/`: The root source directory that contains all the TypeScript/JavaScript code for the application.

  - `components/`: This directory contains reusable React components that can be used throughout the application. These components can be shared and imported into different pages or other components.

  - `pages/`: This directory contains the main pages of the application. Each page is typically a React component that represents a specific route or view of the application.

  - `hooks/`: This directory contains custom hooks that encapsulate reusable logic or functionality used in the application. These hooks can be imported and used by components.

  - `lib/`: This directory contains utility or helper functions that provide common functionality used across the application. These functions can be imported and used by components or other modules.

  - `App.tsx`: This file contains the main component and routing logic of the application. It serves as the entry point for defining routes and rendering different pages based on the current URL.

  - `Main.tsx`: This file serves as the entry point for rendering the main content of the application. It can be used to wrap the main components or layout of the application.
