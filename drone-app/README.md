Drone App Documentation
Overview
Drone App is a web-based application built using React, Tailwind CSS, and Vite. It provides an interface for KOOMA Drone's pilot training services, including course offerings, FAQs, and technical support resources.

Installation & Setup
Prerequisites
Make sure the following are installed:

Node.js (v16 or later)

npm or yarn

Clone the Repository
sh
Copy
Edit
git clone <repository-url>
cd drone-app
Install Dependencies
sh
Copy
Edit
npm install
# or
yarn install
Start the Development Server
sh
Copy
Edit
npm run dev
# or
yarn dev
Visit the app at http://localhost:5173/ by default.

Folder Structure
bash
Copy
Edit
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
Available Scripts
npm run dev – Start the development server

npm run build – Build the project for production

npm run preview – Preview the production build locally

Key Components & Pages
Navbar.jsx – Main navigation

Footer.jsx – Footer section

Home.jsx – Landing page

About.jsx – About us

Courses.jsx – Drone pilot training courses

FAQ.jsx – Frequently Asked Questions

TechSupport.jsx – Technical support page

ImageSlider.jsx – Image carousel component

Deployment Instructions
Build the project:

sh
Copy
Edit
npm run build
Deploy the dist/ folder to a static host like Netlify, Vercel, or GitHub Pages.

License
This project is licensed under the MIT License.

© 2025 KOOMA Drone
See the LICENSE file for full license text.