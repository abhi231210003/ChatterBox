# ChatterBox

ChatterBox is a full-stack real-time chat application built with the MERN stack.
It supports secure user authentication, one-to-one messaging, online user tracking,
and live message delivery with Socket.IO.

## Project Details

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB 
- Realtime: Socket.IO
- Authentication: JWT-based login and protected routes

## Folder Structure

- `Backend/` - Express API, MongoDB models, authentication, and Socket.IO server
- `Frontend/` - React client UI and chat screens

## Prerequisites

- Node.js installed
- MongoDB connection string

## Setup

### 1. Install backend dependencies

```powershell
cd Backend
npm install
```

### 2. Create the backend `.env` file

Create a file named `.env` inside `Backend/` with this format:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_TOKEN=your_secret_key
FRONTEND_URL=http://localhost:3001
```

For production (e.g., Vercel), set `FRONTEND_URL` to your deployed frontend URL.

### 3. Install frontend dependencies

```powershell
cd ..\Frontend
npm install
```

## Run the Project

Open two terminals and run the backend and frontend separately.

### Backend

```powershell
cd Backend
npm start
```

### Frontend

```powershell
cd Frontend
npm run dev
```

## Features

- User signup and login
- JWT authentication
- Real-time messaging with Socket.IO
- Online user status
- Chat interface for sending and receiving messages

## Notes

- The frontend connects to the backend Socket.IO server at `http://localhost:5000`.
- If you change the backend or frontend port, update the corresponding URLs in the source code.

## Deployment

### Deploy Backend on Render

1. Push your code to GitHub
2. Go to [Render](https://render.com) and create a new Web Service
3. Connect your GitHub repo
4. Set the start command to `npm start`
5. Add environment variables:
   - `MONGODB_URI=your_production_mongodb_uri`
   - `JWT_TOKEN=your_secret_key`
   - `FRONTEND_URL=https://your-frontend-url.vercel.app` (your Vercel frontend URL)
6. Deploy

### Deploy Frontend on Vercel

1. Push your Frontend folder to GitHub (or your entire repo)
2. Go to [Vercel](https://vercel.com) and import your repo
3. Select the `Frontend` folder as the root
4. Set the framework to **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

### Update Frontend Socket URL for Production

Before deploying the frontend, update the Socket.IO connection URL in [Frontend/src/context/SocketContext.jsx](Frontend/src/context/SocketContext.jsx):

Change:
```javascript
const socket = io("http://localhost:5000", {
```

To:
```javascript
const socket = io("https://your-render-backend-url.com", {
```

Then commit and push to trigger a Vercel redeploy.
