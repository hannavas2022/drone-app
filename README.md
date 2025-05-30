
# 🧾 **README for Entire Project (Full Stack)**

```markdown
# 🛸 KOOMA Drone – Full Stack Project

A full-stack web platform for KOOMA Drone, offering drone training, videography services, and a smart FAQ chatbot assistant. Built with **React + Tailwind (Frontend)** and a **Node.js + Cohere AI (Backend)** stack.

---

## ✨ Overview

- Responsive frontend with **React + Vite + Tailwind CSS**
- Chatbot powered by **Cohere LLM (command-r-plus)**
- Seamless frontend-backend integration via REST API
- FAQs dynamically answered using structured data

---

## 📁 Project Structure

project-root/
├── drone-app/ # Frontend (React + Tailwind)
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Route-based pages
│ │ └── main.jsx # Entry point
│ └── public/ # Static assets
├── drone-app-backend/ # Backend (Node.js + Cohere API)
│ ├── api/ # Vercel functions
│ └── data/ # FAQ content
└── README.md # This file


---

## ⚙️ Setup Instructions

### 1. 📦 Frontend

```bash
cd drone-app
npm install
npm run dev

Frontend runs at: http://localhost:5173

### 2. 🔧 Backend

cd drone-app-backend
npm install
vercel dev

Backend runs at: http://localhost:3000/api/chat

## 🔄 API Integration

The frontend connects to:

POST https://your-vercel-backend.vercel.app/api/chat

## 🧠 Technologies Used

| Stack      | Tools                            |
| ---------- | -------------------------------- |
| Frontend   | React, Tailwind CSS, Vite        |
| Backend    | Node.js, Cohere SDK (v2), Vercel |
| LLM        | Cohere command-r-plus            |
| Deployment | Vercel (Backend), FTP (Frontend) |

## 📄 License

MIT License © 2025 KOOMA Drone
Developed by: Hanna Vasylets
UX/UI: Tetiana Moskvitina