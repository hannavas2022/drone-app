# 🤖 KOOMA Drone – Chatbot Backend

## 📋 Overview
This is the backend API for KOOMA Drone’s chatbot, powered by Cohere's Large Language Model (LLM). It processes user queries using context from a predefined FAQ dataset and returns helpful answers.

## 🌐 Tech Stack
- **Node.js**
- **Cohere AI SDK (V2)**
- **Vercel (Serverless Deployment)**
- **FAQ Data (Local JSON/JS file)**

## 🚀 Features
- LLM-powered conversational responses
- Contextual FAQ matching
- CORS enabled for frontend integration
- Secure API key usage via environment variables

## 📁 Folder Structure

drone-app-backend/
├── api/
│ └── chat.mjs # API route for chatbot
├── data/
│ └── faqData.mjs # Structured FAQ content
├── .vercel/ # Vercel config (if applicable)
├── .env # Environment file (contains CO_API_KEY)
├── package.json # Metadata and dependencies
└── README.md # This file


## 🧪 Local Development

### ✅ Prerequisites

- Node.js (v16+)
- Vercel CLI (for local testing):  
  Install it with `npm i -g vercel`

### 📥 Install Dependencies

npm install

### 🧪 Run Locally with Vercel

vercel dev

### 🌍 Endpoint

POST /api/chat

Request Body:
{
  "message": "How do I register for a drone course?"
}

Response:
{
  "reply": "You can register via the BookForm on our homepage or contact support."
}

### 🔐 Environment Variables

CO_API_KEY=your_cohere_api_key

### 🚢 Deployment

vercel --prod

### 📄 License
This project is licensed under the MIT License.  
© 2025 KOOMA Drone