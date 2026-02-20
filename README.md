📚 Virtual Courses
AI-Powered Learning Management System (MERN Stack)

Virtual Courses is a full-stack Learning Management System (LMS) built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The platform enables instructors to create and manage courses, while students can securely enroll and access structured video lectures.

It integrates secure authentication, Razorpay payment gateway, AI-powered smart search, and role-based dashboards to deliver a modern SaaS-level e-learning experience.

🚀 Features
👨‍🎓 Student

Browse and search courses (AI Smart Search)

View course details & curriculum

Secure course enrollment via Razorpay

Access paid lectures

Track learning progress

Rate & review courses

👨‍🏫 Instructor

Create, edit, and delete courses

Upload and manage lectures

Publish/unpublish courses

Track enrollments

View earnings dashboard

🔐 Authentication

Google OAuth 2.0 login

Role-based access control

💳 Payments

Razorpay payment integration

Secure enrollment verification

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

Redux Toolkit

Backend

Node.js

Express.js

Database

MongoDB

Authentication

Google OAuth 2.0

Payment Gateway

Razorpay

AI Integration

Gemini / OpenAI API (Smart Search)

📂 Folder Structure
virtual-courses/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .env
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/virtual-courses.git
cd virtual-courses
2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

Start backend server:

npm start
3️⃣ Frontend Setup

Open new terminal:

cd frontend
npm install
npm run dev

Frontend will run on:

http://localhost:5173

Backend will run on:

http://localhost:5000
🔄 Application Flow

User logs in using Google OAuth.

Role is identified (Student / Instructor).

Students browse or search courses.

Enrollment is processed via Razorpay.

After successful payment, student gains lecture access.

Instructors manage courses and monitor earnings via dashboard.

🌍 Deployment

Frontend: Render / Vercel
Backend: Render
Database: MongoDB Atlas

📈 Future Enhancements

Course completion certificates

Advanced analytics dashboard

Mobile app version

Recommendation engine

👩‍💻 Author

Vanshika Yadav
Full Stack Developer | MERN Stack Enthusiast
