Blog-Website: Full Stack Blog Application (MERN)

This is a full-stack blogging platform built using the MERN stack (MongoDB, Express, React, Node.js). It supports user authentication (Sign Up/Sign In) and CRUD operations (Create, Read, Update, Delete) for posts.

🛠️ Technology Stack

Frontend: React, Material-UI (MUI), Axios

Backend: Node.js, Express.js

Database: MongoDB Atlas (via Mongoose)

File Storage: MongoDB GridFS (via multer-gridfs-storage)

Authentication: JWT (JSON Web Tokens)

⚙️ Local Setup and Installation

Follow these steps to set up the project on your local machine.

1. Prerequisites

Node.js (LTS version 18 or 20 recommended)

MongoDB Atlas Account

Git

2. Clone the Repository

git clone [https://github.com/PURUSHOTTAM06/Blog-Website.git](https://github.com/PURUSHOTTAM06/Blog-Website.git)
cd Blog-Website


3. Configure Environment Variables

Create a file named .env in the root directory (/Blog-Website/.env). This file holds your database credentials and secret keys.

# .env file content

# MongoDB Atlas Connection
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password

# Authentication Secrets (Must be long and complex)
ACCESS_SECRET_KEY=your_access_token_secret_key
REFRESH_SECRET_KEY=your_refresh_token_secret_key

# Optional: Add the PORT for the server
PORT=8000


4. Setup Backend (Server)

Navigate to the server directory and install dependencies.

cd server
npm install


5. Setup Frontend (Client)

Open a new terminal, navigate to the client directory, and install dependencies.

cd client
npm install


⚠️ Important Client Fix (For Node.js v17+):
If you encounter the ERR_OSSL_EVP_UNSUPPORTED error, ensure your client/package.json file's start script is updated to use cross-env:

"scripts": {
  "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
  "build": "react-scripts build",
  ...
},


6. Run the Application

In two separate terminal windows:

Terminal

Directory

Command

1 (Backend)

/Blog-Website/server

npm start

2 (Frontend)

/Blog-Website/client

npm start

The frontend will be available at http://localhost:3000.

✅ Local Proof of Concept

The application runs perfectly in the local development environment (localhost), confirming the correctness of the codebase and database connection.

Server & Database Status

The backend successfully connects to the MongoDB database and starts the server.

Authentication View

The local application correctly displays the Sign Up and Login interface, allowing user registration and authentication flow.

Main Application View

The main blog feed and content view load successfully.

⚠️ Deployment & CORS Troubleshooting

If you deploy this project to Render or any cloud environment, you must handle cross-origin requests (CORS) since your frontend and backend run on different domains.

1. Backend CORS Configuration (server/index.js)

Ensure your main Express app is configured to allow requests from your frontend's deployed URL and correctly parse JSON data. This fixes the 400 Bad Request error.

// In server/index.js

// 1. Must be added to parse JSON requests (Fixes 400 Bad Request)
app.use(express.json()); 

// 2. Configure CORS to allow your frontend's domain
app.use(cors({
    origin: 'YOUR_FRONTEND_URL_HERE', // e.g., [https://your-frontend-app.onrender.com](https://your-frontend-app.onrender.com)
    credentials: true,
}));

// ... then use the router
app.use('/', Router); 


2. Frontend API Configuration (client/service/api.js)

Ensure your api.js file uses the deployed backend URL for all requests.

// In client/service/api.js

const API_URL = 'YOUR_BACKEND_URL_HERE'; // e.g., [https://your-backend-api.onrender.com](https://your-backend-api.onrender.com)


🤝 Contributing

Feel free to fork the repository and contribute!
