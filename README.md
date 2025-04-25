
# Feedback Management System


A full-stack web application for collecting, managing, and viewing user feedback.

## Table of Contents

- [Feedback Management System](#feedback-management-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demonstration](#demonstration)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Architecture \& Flow](#architecture--flow)
    - [Project Structure](#project-structure)
    - [Application Flow](#application-flow)
  - [Contacts](#contacts)
  - [Contributing](#contributing)

## Features

-   Submit feedback through a user-friendly form
-   Categorize feedback as General, Bug Report, Feature Request, or Suggestion
-   View all feedback in a dashboard
-   Filter feedback by category
-   Sort feedback by creation date

## Demonstration
![User Feedback Form](/client/public/user-feedback-form.png)
![User Feedback Dashboard](/client/public/user-feedback-dashboard.png)

## Tech Stack
-   **Frontend**: React, React Router, Axios, Tailwind CSS
-   **Backend**: Express.js, TypeScript
-   **Database**: PostgreSQL with Prisma ORM

## Prerequisites

-   Node.js (v14+)
-   npm or pnpm
-   PostgreSQL database or docker

## Setup

1. Clone the Repository
	```bash
	git clone https://github.com/kundusubrata/user-feedback-system.git
	cd user-feedback-system
	```
2. Install Dependencies
	```bash
	# Install client dependencies
	cd client && pnpm install
	# Install server dependencies
	cd server && pnpm install
	```
3.  Configure Environment Variables Rename `.env.example` to `.env` inside the `server` directory and provide appropriate values:
	```bash
	PORT=4000
	DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/userfeedback-system?schema=public"
	```
	Ensure all environment variables are correctly configured before running the application.
	
4.  Set Up Prisma
	Run the following commands to generate the Prisma client and apply database migrations:
	```
	npx prisma migrate dev --name added-feedback
	npx prisma generate
	```
5. Run the Development Server Start both the frontend and backend servers in separate terminals:
	```bash
	# Start client-side development server
	pnpm run dev
	# Start server-side development server
	pnpm run dev
	```
    -   The backend server will run at [http://localhost:4000](http://localhost:4000).
    -   The frontend server will run at [http://localhost:5173](http://localhost:5173).
    
 
## Architecture & Flow
### Project Structure
```
feedback-system/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── types/           # TypeScript type definitions
│   │   └── App.tsx          # Main application component
│   └── ...
├── server/                  # Backend Express application
│   ├── controllers/         # Route controllers
│   ├── routes/              # API routes
│   ├── prisma/              # Prisma schema and migrations
│   ├── types/               # TypeScript type definitions
│   └── index.ts             # Server entry point
└── ...
```
### Application Flow

-   User Interaction: Users fill out a feedback form on the frontend.
-   API Request: Form data is sent via POST /api/v1/feedback.
-   Controller Logic: The backend validates and stores it using Prisma.
-   Data Fetching: Feedback entries are fetched via GET /api/v1/feedback, with filters (category, sort).

## Contacts
-   LinkedIn: [Subrata Kundu](https://www.linkedin.com/in/kundu-subrata/)
-   Mail: [kundu.subrata2020@gmail.com](mailto:kundu.subrata2020@gmail.com)
-   GitHub: [kundusubrata](https://github.com/kundusubrata)

## Contributing

Feel free to fork this repository, create a branch, and submit pull requests for any improvements or fixes.



