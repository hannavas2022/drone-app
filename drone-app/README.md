#﻿🛸 Drone App Documentation
##📋 Overview
Drone App is a web-based application developed for KOOMA Drone using React, Tailwind CSS, and Vite. It serves as a portal for drone pilot training services, including course details, FAQs, and support resources.



##⚙️ Installation & Setup
###✅ Prerequisites
Ensure you have the following installed:
Node.js (v16 or later)
npm or yarn

###📥 Clone the Repository
git clone <repository-url>
cd drone-app

##📦 Install Dependencies

npm install
### or
yarn install

##🚀 Start the Development Server

npm run dev
### or
yarn dev

Visit the app at http://localhost:5173/ by default.

##📁 Folder Structure

drone-app/
├── public/                 # Static files like favicon, manifest, etc.
├── src/                    # Source files
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level components
│   ├── App.jsx             # Main App component
│   └── main.jsx            # App entry point
├── .vscode/                # VSCode project settings
├── dist/                   # Build output
├── node_modules/           # Installed dependencies
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
├── postcss.config.js       # PostCSS settings
├── .gitignore              # Git ignored files
└── README.md               # This file


##📜 Available Scripts

npm run dev – Start the development server
npm run build – Build the project for production
npm run preview – Preview the production build locally

##🧩 Key Pages & Components

###Pages (/src/pages)
Home.jsx – Landing page with introduction and features
Courses.jsx – Information about available drone courses
FAQ.jsx – Frequently asked questions
Videography.jsx – Details about drone videography services

###Components (/src/components)
About.jsx – About the school or company
BookForm.jsx – Booking or registration form
Construction.jsx – Placeholder/under construction message
FAQ_SQ.jsx & FAQ_data.jsx – FAQ structured logic and data
HeroPromo.jsx – Promotional hero section
Navbar.jsx – Top navigation menu
Footer.jsx – Footer with contact details and links
RoutesLayout.jsx – Layout for routing


##🚢 Deployment Instructions

1.Build the project:
npm run build

2. Deploy the dist/ folder to a static host.

##📄 License

This project is licensed under the MIT License.
© 2025 KOOMA Drone
