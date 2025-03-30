# Backend - Full-Stack Intern Assignment

## Overview
This is the backend of the Full-Stack Intern Assignment project, built using **Node.js** with **TypeScript** and **Prisma** for database management. It provides authentication functionalities, including user registration and login.

## Technology Stack
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **TypeScript** - Static typing for JavaScript
- **Prisma** - Database ORM (Object-Relational Mapping)
- **bcryptjs** - Password hashing
- **jsonwebtoken** - Token-based authentication
- **dotenv** - Manage environment variables

## Folder Structure
```
/backend
├── src
│   ├── controllers   # Contains business logic for authentication
│   ├── middleware    # Contains authentication middleware
│   ├── routes        # Defines API routes
│   ├── prisma        # Prisma schema and database setup
│   ├── server.ts     # Main entry point
├── .env              # Environment variables
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── README.md         # Documentation
```

## Installation & Setup
### Prerequisites
- **Node.js** installed
- **PostgreSQL** (or another database supported by Prisma)

### 1. Clone the Repository
```sh
git clone https://github.com/Ritesh-Thorve/Assignment-Login-page.git
cd fullstack-intern-assignment/backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and configure:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 4. Setup Prisma and Database
```sh
npx prisma migrate dev --name init
```
This will create the database schema and apply migrations.

### 5. Start the Server
```sh
npm run dev
```
The backend will be available at `http://localhost:5000`.

## API Endpoints
### Authentication Routes
#### 1. Register a User
- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

#### 2. Login a User
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "token": "your_jwt_token"
}
```

## Error Handling
- Proper error handling is implemented using middleware.
- Invalid requests return appropriate error messages.
- Example:
```json
{
  "error": "Invalid email or password"
}
```

## Running Tests
To run tests (if applicable):
```sh
npm test
```

## Notes
- This backend does **not** include deployment instructions as per assignment requirements.
- The frontend consumes these API endpoints to register and authenticate users.

## Author
- Name: Ritesh Thorve
- GitHub: https://github.com/Ritesh-Thorve
 