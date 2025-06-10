# 🗳️ Online Voting System

A full-stack Online Voting System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform enables secure, real-time voting with role-based access for users and admins.

- 🎯 Users can register, log in, and vote in active elections.
- 🛡️ Admins can create and manage elections and view results.
- 💡 Built with scalability, security, and simplicity in mind.

---

## 🚀 Live Preview

Frontend (if hosted): [Coming Soon]  
Backend (API): [Coming Soon]  
GitHub Repo: https://github.com/maahirtaneja/Online-Voting-System

---

## 📁 Folder Structure
```

Online-Voting-System/
│
├── frontend/ ← ⚛️ React + Tailwind UI
│ ├── src/
│ └── ...
│
├── backend/ ← 🌐 Node.js + Express + MongoDB
│ ├── routes/
│ ├── models/
│ ├── server.js
│ └── .env
│
└── README.md
```

---

## ✨ Features

- 👥 User Registration and Login (with Voter ID validation)
- 🔒 Secure Authentication using bcrypt (password hashing)
- 🧾 Admin Login and Election Creation Panel
- 🗳️ Voting Dashboard for Users (one vote per user)
- 📃 Responsive UI with Tailwind CSS
- 🔄 Real-time Dashboard updates and state management
- 🌐 MongoDB integration for storing users, elections, and results

---

## 🛠️ Tech Stack

| Tech         | Usage                          |
|--------------|--------------------------------|
| React.js     | Frontend UI                    |
| Tailwind CSS | Styling                        |
| Node.js      | Backend runtime                |
| Express.js   | Backend framework              |
| MongoDB      | NoSQL database                 |
| bcryptjs     | Password hashing               |
| JWT (optional)| Token-based authentication   |
| Framer Motion| UI animations (Landing, Auth)  |

---

## 💻 Setup Instructions

### 🔧 Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Git

---

### 🖥️ Frontend (React)

1. Navigate to frontend:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
    ```
3. Start the React app:
   ```bash
   npm run dev
   ```
App will run on: http://localhost:5173

---

### 🛠️ Backend (Node + Express)

1. Navigate to backend:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the backend directory with the following content:
   ```bash
   PORT=4000 
   DATABASE_URI=mongodb://localhost:27017/Voting_system
4. Start the backend server:
   ```bash
   node server.js
   ```
The backend will run at: http://localhost:4000

---


## 📦 Deployment

You can deploy this full-stack project using:

### 🌐 Frontend
- Vercel → Connect your GitHub repo and auto-deploy from frontend folder.
- Netlify → Use build command: npm run build and publish from dist or build folder.

### 🔧 Backend
- Render → Free Node.js hosting with automatic restart and MongoDB support.
- Railway / Cyclic / Heroku → Simple deployment using a GitHub connection or Docker.

### ☁️ Database
- MongoDB Atlas → Cloud-based MongoDB database (replace localhost URI in .env with cluster URI)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to:
- Fix bugs 🐞
- Add new features ✨
- Improve UI/UX 🎨
- Write tests 🧪

Just fork this repo, make your changes, and open a Pull Request. Let's make it better together!

---

## 📧 Contact

For any queries, feedback, or collaboration ideas:

- 📬 Email: [maahirtaneja@gmail.com](mailto:maahirtaneja@gmail.com)

---

© 2025 Maahir Taneja — Built with ❤️ using MERN Stack  

