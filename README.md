
# Stepful Product Engineer Take-Home Project

## Overview

This repository contains my submission for the Stepful Product Engineer take-home project. It's a full-stack web application designed for managing the scheduling of 1-on-1 coaching calls at Stepful. The project is structured into two main components: the backend server and the frontend application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the application, ensure you have the following installed:
- Node.js (Download from [Node.js](https://nodejs.org/))
- PostgreSQL (Download from [PostgreSQL](https://www.postgresql.org/download/))

### Installing and Running the Application

1. **Clone the Backend Repository:**

   ```bash
   git clone https://github.com/gowtham7991/StepfulNodeServer.git
   cd stepful-backend
   ```

2. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up the Database:**
   
   Ensure PostgreSQL is running. Create a new database and update the database configuration in the backend project accordingly.

4. **Run the Backend Server:**

   ```bash
   node app.js
   ```

   The backend server will start on `http://localhost:4000`.

5. **Clone the Frontend Repository:**

   Open a new terminal window.

   ```bash
   git clone https://github.com/gowtham7991/stepful-coachingscheduler.git
   cd stepful-frontend
   ```

6. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

7. **Run the Frontend Application:**

   ```bash
   npm start
   ```

   The frontend application will start on `http://localhost:3000`.

8. **Access the Application:**

   Open a web browser and navigate to `http://localhost:3000` to use the application.

## Built With

- **Frontend:** React + Redux
- **Backend:** Node.js with Express
- **Database:** PostgreSQL

## Functionality

- User login/register (dummy implementation).
- Coaches can add and view their availability.
- Students can view and book available slots.
- Both coaches and students can view contact details upon booking.
- Coaches can submit and view feedback for completed sessions.

## Repository Links

- Backend Repo: [Stepful Backend](https://github.com/gowtham7991/StepfulNodeServer)
- Frontend Repo: The current link

## Author

- Gowtham Potnuru

## Acknowledgments

- Stepful team for providing this opportunity.
- All open-source contributors whose tools made this project possible.

---

Feel free to reach out to me at [gowthampotnuru1997@gmail.com] for any queries or issues regarding the setup and execution of this project.
