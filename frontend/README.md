# Frontend - Full-Stack Intern Assignment

## Overview
This is the frontend of the Full-Stack Intern Assignment project, built using **React** with **TypeScript**. It follows the provided Figma design and integrates with the backend for user authentication.

## Technology Stack
- **React** - Frontend UI library
- **TypeScript** - Static typing for JavaScript
- **React Query** - Data fetching and state management
- **React Hook Form** - Form validation and handling
- **Zod** - Schema validation
- **Axios** - API communication
- **React Router** - Client-side routing

## Folder Structure
```
/frontend
├── src
│   ├── components   # Reusable UI components
│   ├── pages        # Application pages (Login, Register)
│   ├── api         # API handling functions
│   ├── context     # Authentication context
│   ├── hooks       # Custom hooks
│   ├── App.tsx     # Main application file
│   ├── main.tsx    # Entry point
├── .env            # Environment variables
├── package.json    # Dependencies and scripts
├── tsconfig.json   # TypeScript configuration
└── README.md       # Documentation
```

## Installation & Setup
### Prerequisites
- **Node.js** installed
- Backend API running on `http://localhost:5000`

### 1. Clone the Repository
```sh
git clone https://github.com/Ritesh-Thorve/Fullstack-internship-assignment.git
cd fullstack-intern-assignment/frontend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and configure:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start the Frontend
```sh
npm run dev
```
The frontend will be available at `http://localhost:3000`.

## Features
- **User Registration** with form validation using Zod and React Hook Form.
- **User Login** with authentication context.
- **API Integration** with React Query for efficient data fetching and caching.
- **Error Handling** for API responses and form validation.

## Running Tests
To run tests (if applicable):
```sh
npm test
```

## Notes
- Deployment is **not** required per assignment instructions.
- Ensure the backend is running before using the frontend.

 

