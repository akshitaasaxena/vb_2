# Smart Parking Management and Slot Booking System

A web-based Smart Parking Management and Slot Booking System built with Node.js, Express, MongoDB, and EJS.

## Features

- **User Authentication**: Secure user registration and login with JWT and bcrypt password hashing.
- **Role-Based Access Control**: Separate dashboards for Users and Administrators.
- **Slot Reservation & Booking**: Real-time slot availability, booking with vehicle number, slot type (Car, Bike, EV, etc.), duration, and dynamic pricing.
- **Admin Dashboard**: Manage parking slots (create, update status, remove), view active/completed bookings, and track analytics.
- **Seeding Script**: Ready-to-use sample data for quick setup and testing.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend / Templating**: EJS, Vanilla CSS
- **Authentication**: JSON Web Tokens (JWT), Cookie Parser, Bcrypt

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   Example:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. Seed the database (Optional):
   ```bash
   node seed.js
   ```

5. Start the application:
   ```bash
   npm start
   ```
   Open your browser and navigate to `http://localhost:3000`.

## License

This project is licensed under the MIT License.
