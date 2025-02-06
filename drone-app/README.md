# Drone App Documentation

## Overview
Drone App is a web-based application built using **React, Tailwind CSS, and Vite**. It provides an interface for pilot drone school services, including courses, FAQs, and technical support.

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone <repository-url>
cd drone-app
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Start the Development Server
```sh
npm run dev
# or
yarn dev
```
This will start the app at **http://localhost:5173/** by default.

## Folder Structure
```
/drone-app
|-- /src
|   |-- /components        # Reusable UI components
|   |-- /pages             # Page-level components
|   |-- /assets            # Images and static files
|   |-- App.jsx            # Main app component
|   |-- main.jsx           # Application entry point
|-- /public                # Public assets
|-- package.json           # Project dependencies and scripts
|-- tailwind.config.js     # Tailwind CSS configuration
|-- vite.config.js         # Vite configuration
```

## Available Scripts
- `npm run dev` – Start the development server
- `npm run build` – Build the project for production
- `npm run preview` – Preview the built application

## Key Components & Pages
- **Navbar.jsx** – Main navigation bar
- **Footer.jsx** – Footer section
- **Home.jsx** – Landing page
- **About.jsx** – About us page
- **Courses.jsx** – Drone-related courses
- **FAQ.jsx** – Frequently Asked Questions section
- **TechSupport.jsx** – Technical support page
- **ImageSlider.jsx** – Image slider for showcasing content

## Deployment Instructions
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy the **dist/** folder to a static hosting provider like **Netlify, Vercel, or GitHub Pages**.

## License
This project is licensed under **[your preferred license]**.