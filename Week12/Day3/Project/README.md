# Storytelling App

This project consists of two parts: a **client** (frontend) and a **server** (backend). Follow the steps below to run the project locally.

---

## 📦 Prerequisites

- Node.js & npm installed
- PostgreSQL installed and running

---

## 🖥️ Client

### Steps to Run:

1. Navigate to the `client` folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `client` directory and add the following:

   ```
   VITE_API_BASE_URL=http://localhost:3001
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## 🛠️ Server

### Steps to Run:

1. Navigate to the `server` folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add the following (replace placeholder values with your actual config):

   ```
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   JWT_SECRET=your_jwt_secret
   REFRESH_SECRET=your_refresh_secret
   DB_DISABLE_SSL=true
   DISABLE_SECURE=true
   ```

4. Start the server:

   ```bash
   npm start
   ```

---

## ✅ Done

Your client should now be running at `http://localhost:5173` (or similar), and your server at `http://localhost:3001`.

Link to website demo: `https://storytellingfront.onrender.com`.