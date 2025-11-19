# 📝 Task Manager App

A full-stack **Task Manager Application** built with **Node.js**, **Express**, **MongoDB**, and **React**.  
This app allows users to **register**, **log in**, and **manage tasks** (create, view, update, delete).

---

## 🚀 Features

### 🔒 Authentication
- User Registration  
- Login using JWT  
- Protected API routes  

### 🗂 Task Management
- Create tasks  
- View tasks  
- Edit tasks  
- Delete tasks  
- Optional filter tasks by status  

### 💻 Frontend
- React UI  
- Login & Register pages  
- Task Dashboard  

### 🛠 Backend
- Node.js + Express REST API  
- MongoDB using Mongoose  
- JWT Authentication  
- Basic Validation  

---

# 📦 Tech Stack

### Frontend
- React  
- React Router  
- Axios  

### Backend
- Node.js  
- Express  
- MongoDB (Mongoose)  
- JWT  
- Bcrypt  
- dotenv  
- CORS  

---EXPRESS_VALIDATORS

# 📂 Project Structure

```
project/
 ├── server/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── middleware/
 │    ├── index.js
 │    └── package.json
 └── client/
      ├── src/
      ├── public/
      └── package.json
```

---

#⚙️ Backend Setup

### 1. Navigate to server folder
```bash
cd server
```

### 2. Install backend dependencies
```bash
npm install
```

### 3. Create `.env` file
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
```

### 4. Start backend server
```bash
npm start
```

OR development mode:

```bash
npm run dev
```

Backend URL:
```
http://localhost:4000
```

---

# 💻 Frontend Setup

### 1. Navigate to client folder
```bash
cd frontend
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Run the frontend
```bash
npm start
```

Frontend URL:
```
http://localhost:3000
```

---

# 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login | Login user |

### Tasks (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks | Get all tasks |
| POST   | /api/tasks | Create a new task |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

# 🧪 Running Both Apps Together

Open **two terminals**:

### Terminal 1 → server
```bash
cd backend
npm run dev
```

### Terminal 2 → client
```bash
cd frontend
npm start
```

---

# 🏗 Build Frontend for Production
```bash
npm run build
```

---

# 📤 Deployment Options
You may deploy using:

- **Frontend** → Vercel / Netlify  
- **Backend** → Render   
- **Database** → MongoDB Atlas  

---

# 📌 Push to GitHub
```bash
git add .
git commit -m "Added full Task Manager project"
git push
```

---

# 🎉 Done!
Your Task Manager App is now ready!


