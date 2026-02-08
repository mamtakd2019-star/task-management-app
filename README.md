# Task Management System

This is a simple Task Management web application developed as part of an assignment.  
The application allows users to sign up, log in, and manage their daily tasks.

---

🚀 Features

- User Signup & Login
- Add new tasks
- Edit existing tasks
- Delete tasks
- Update task status:
  - Pending
  - In Progress
  - Completed
- Color-coded task status for better UI
- Simple and clean user interface

---

🛠 Tech Stack Used

= Frontend
- HTML
- CSS
- JavaScript

 Backend
- Node.js
- Express.js


Data Storage
- In-memory storage (Array)


📂 Project Structure
 

task-manager-app/
│
├── public/
│   ├── index.html        # Dashboard UI
│   ├── login.html        # Login page
│   ├── signup.html       # Signup page
│   ├── style.css         # Common styles (UI + status colors)
│   └── script.js         # Frontend logic
│
├── users.js              # In-memory user data
├── server.js             # Express server & API routes
├── package.json          # Project dependencies
└── README.md             # Project documentation




▶️ How to Run the Project

1. Install Node.js
2. Open terminal in project folder
3. Run the following command:

```bash
npm install



4.Start the server:
node server.js

5.Open browser and go to:
http://localhost:3000


📌 Notes

.This project uses in-memory storage for simplicity.

.Data will reset when the server restarts.

.Database integration (MongoDB / MySQL) can be added in future.

.Current implementation uses in-memory storage for simplicity.



🔮 Future Improvements

.integrate database (MongoDB / MySQL) for permanent data storage

.Password encryption using bcrypt

.Role-based authentication

.Mobile responsive UI


👩‍💻 Author

Mamta Dhangar
Beginner Web Developer



