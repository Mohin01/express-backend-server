# Express Backend Server

A simple Express.js backend server with basic API endpoints and static file serving.

## Features

- ✅ Express.js server setup
- ✅ JSON API endpoints
- ✅ Static file serving
- ✅ Error handling middleware
- ✅ Health check endpoint
- ✅ User management API (GET/POST)
- ✅ Interactive test page

## Quick Start

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

3. **Access your server**:
   - Main page: http://localhost:3000
   - Test page: http://localhost:3000/index.html
   - Health check: http://localhost:3000/api/health
   - Users API: http://localhost:3000/api/users

## API Endpoints

### GET `/`
Returns server status and welcome message.

### GET `/api/health`
Returns server health information including uptime.

### GET `/api/users`
Returns a list of sample users.

### POST `/api/users`
Creates a new user. Requires `name` and `email` in request body.

## Project Structure

```
Express/
├── server.js          # Main server file
├── package.json       # Project configuration
├── public/            # Static files
│   └── index.html     # Test page
└── node_modules/      # Dependencies
```

## Next Steps

You can extend this server by:

1. **Adding a database** (MongoDB, PostgreSQL, etc.)
2. **Adding authentication** (JWT, sessions)
3. **Adding more API endpoints**
4. **Adding middleware** (CORS, rate limiting, etc.)
5. **Adding environment variables** (.env file)
6. **Adding testing** (Jest, Mocha)

## Development

To run in development mode with auto-restart, you can install nodemon:
```bash
npm install -g nodemon
nodemon server.js
``` 