# Next.js Authentication System

A full-stack authentication system built with Next.js App Router, TypeScript, MongoDB, JWT authentication, middleware route protection, email verification, and password reset functionality.

---

# Features

* User Signup
* User Login
* User Logout
* JWT Authentication
* Protected Routes using Middleware
* Dynamic Profile Pages
* User Details API
* Email Verification System
* Forgot Password Flow
* Secure Password Hashing
* Token-based Authentication
* MongoDB Database Integration
* Responsive UI with Tailwind CSS

---

# Tech Stack

## Frontend

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS
* Axios
* React Hot Toast

## Backend

* Next.js API Routes
* Node.js
* JWT (jsonwebtoken)
* bcryptjs
* Nodemailer

## Database

* MongoDB
* Mongoose

---

# Project Structure

```bash
src/
│
├── app/
│   ├── api/
│   │   └── users/
│   │       ├── signup/
│   │       ├── login/
│   │       ├── logout/
│   │       ├── me/
│   │       ├── verifyemail/
│   │
│   ├── login/
│   ├── signup/
│   ├── profile/
│   │   └── [id]/
│
│   ├── verifyemail/
│
├── dbConfig/
├── helper/
├── models/
└── middleware.ts
```

---

# Authentication Workflow

## Signup Flow

```text
User enters details
        ↓
Password gets hashed using bcryptjs
        ↓
User stored in MongoDB
        ↓
JWT token generated
        ↓
Verification email sent
        ↓
User clicks verification link
        ↓
Account verified
```

---

## Login Flow

```text
User enters email and password
        ↓
Credentials verified
        ↓
JWT token generated
        ↓
Token stored in cookies
        ↓
User redirected to profile
```

---

## Protected Route Flow

```text
User tries to access protected route
        ↓
Middleware checks JWT token
        ↓
If token exists → allow access
If token missing → redirect to login
```

---

## Email Verification Flow

```text
User signs up
        ↓
Verification email sent using Nodemailer
        ↓
User clicks verification link
        ↓
Frontend verifyemail page opens
        ↓
Backend verifies token
        ↓
User account marked as verified
```

---

---

# Middleware Logic

Middleware is used to:

* Protect private routes
* Prevent logged-in users from accessing login/signup pages
* Redirect unauthenticated users

Example protected routes:

```ts
/profile/:path*
```

---

# JWT Authentication

JWT tokens are used for:

* User authentication
* Route protection
* Access control

Token stored in:

```text
HTTP Cookies
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URL=
TOKEN_SECRET=
DOMAIN=http://localhost:3000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Required Packages

```bash
npm install mongoose
npm install bcryptjs
npm install jsonwebtoken
npm install nodemailer
npm install axios
npm install react-hot-toast
```

---

# Security Features

* Password hashing using bcryptjs
* JWT-based authentication
* Protected API routes
* Email verification before login
* Password reset token expiry
* Secure middleware route protection

---

# Dynamic Routing

Example:

```text
/profile/[id]
```

Used to display dynamic user profile pages.

---

# API Endpoints

| Endpoint                 | Method | Description       |
| ------------------------ | ------ | ----------------- |
| `/api/users/signup`      | POST   | Register new user |
| `/api/users/login`       | POST   | Login user        |
| `/api/users/logout`      | GET    | Logout user       |
| `/api/users/me`          | GET    | Get current user  |
| `/api/users/verifyemail` | POST   | Verify email      |

---

# UI Design

The project uses:

* Tailwind CSS
* Glassmorphism design
* Gradient backgrounds
* Responsive layouts
* Interactive hover animations

---

# Future Improvements

* OAuth Authentication (Google/GitHub)
* Refresh Tokens
* Role-Based Authentication
* Rate Limiting
* Two-Factor Authentication
* Account Recovery
* Session Management
* Email Templates
* Admin Dashboard

---

# Learning Outcomes

This project demonstrates:

* Full-stack authentication architecture
* Next.js App Router concepts
* Middleware route protection
* JWT authentication flow
* MongoDB integration
* Email verification systems
* Password reset systems
* Dynamic routing
* API handling in Next.js
* Secure authentication practices

---

# Author

Built by Shubham kumar pandey

---

# License

This project is for educational and learning purposes.
