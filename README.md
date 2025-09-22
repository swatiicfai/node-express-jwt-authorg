# node-express-jwt-authorg

## Overview
This project demonstrates a secure authentication system using Node.js, Express, MongoDB (via Mongoose), JWTs, and refresh tokens.

## Features
- User registration and login with hashed passwords
- JWT-based authentication for protected routes
- Refresh token support for session renewal
- Input validation and improved error handling

## Setup
1. **Install dependencies:**
	 ```bash
	 npm install
	 ```
2. **Set up environment variables:**
	 Create a `.env` file in the root directory with:
	 ```env
	 JWT_SECRET=your_jwt_secret
	 MONGO_URI=mongodb://localhost:27017/jwtauth
	 ```
3. **Start MongoDB** (if not running):
	 ```bash
	 mongod
	 ```
4. **Run the app:**
	 ```bash
	 npm start
	 ```

## API Endpoints

### Register
`POST /api/auth/register`
```json
{
	"username": "yourname",
	"password": "yourpassword"
}
```
**Validations:** Username ≥ 3 chars, Password ≥ 6 chars

### Login
`POST /api/auth/login`
```json
{
	"username": "yourname",
	"password": "yourpassword"
}
```
**Response:**
```json
{
	"token": "<JWT>",
	"refreshToken": "<refresh_token>"
}
```

### Refresh Token
`POST /api/auth/token`
```json
{
	"refreshToken": "<refresh_token>"
}
```
**Response:**
```json
{
	"token": "<new_JWT>"
}
```

### Logout
`POST /api/auth/logout`
```json
{
	"refreshToken": "<refresh_token>"
}
```
**Response:**
```json
{
	"message": "Logged out successfully"
}
```

### Protected Route Example
`GET /api/protected/`
**Header:**
```
Authorization: Bearer <JWT>
```

## Security Notes
- Passwords are hashed with bcryptjs.
- JWTs expire after 1 hour; refresh tokens expire after 7 days.
- Input is validated using express-validator.
- Refresh tokens are stored in MongoDB and can be revoked on logout.

## License
MIT