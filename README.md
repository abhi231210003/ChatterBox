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
```

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
