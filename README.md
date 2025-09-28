# Next.js Auth App

A simple authentication example built with **Next.js**, **NextAuth.js**, and **MongoDB**.  
This project includes:
- User registration and login
- Protected dashboard page
- Cypress end-to-end

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node.js)
- MongoDB Atlas (cloud database), already setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/nextjs-auth-app.git
cd nextjs-auth-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
# MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://myappuser:mypassword123@cluster0.j8r4x.mongodb.net/mydb?retryWrites=true&w=majority

# NextAuth secret string
NEXTAUTH_SECRET=a2d48e6c6f49459ebcd56385bba8f3c47b3f7eec5e4939d96d5856a5e44c3b17
```
These credentials are for testing only. In production, never commit secrets to Git.

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000
