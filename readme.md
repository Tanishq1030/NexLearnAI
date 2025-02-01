# NexLearn AI: AI-Powered Personalized Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

NexLearn AI is an innovative AI-powered learning platform designed to address the challenges of modern education, particularly the burden on teachers and the need for personalized feedback in under-resourced settings. We leverage the power of AI to revolutionize education by automating grading, providing tailored feedback, and offering personalized learning experiences for each student. This aligns with UN Sustainable Development Goal 4, promoting inclusive and equitable quality education and lifelong learning opportunities.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technical Architecture](#technical-architecture)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Authentication](#authentication)
    - [AI Integration](#ai-integration)
- [AI Integration Details](#ai-integration-details)
- [Future Enhancements](#future-enhancements)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

NexLearn AI recognizes that manual grading and individualized mentoring are incredibly time-consuming, especially in large classrooms. Our platform offers an automated, AI-driven solution that not only grades assignments but also provides personalized feedback to each student, empowering educators to manage their workloads effectively while ensuring every student receives the guidance they need to succeed.

## Key Features

*   **AI-Powered Personalized Learning:** Utilizes Google Gemini (gemini-1.5-pro) via LangChain.js to generate custom study materials and detailed explanations tailored to individual learning styles.
*   **Interactive Quizzes and Assessments:** Adaptive, AI-generated quizzes provide real-time feedback, allowing students to gauge their understanding and track progress dynamically.  Difficulty adjusts based on performance.
*   **AI Chat Tutor:** A conversational AI assistant offers instant support, answers questions, and clarifies complex topics, ensuring timely guidance.  Can provide explanations, examples, and different perspectives on the material.
*   **Adaptive Learning Paths:** The system continuously adjusts content difficulty based on student performance, ensuring a smooth and effective learning curve.  Identifies knowledge gaps and provides targeted resources.
*   **Real-Time Progress Tracking:** Detailed analytics and performance metrics help both students and educators identify strengths and areas for improvement.  Visualizations of progress are provided.
*   **Multi-Platform Compatibility:** Designed for seamless access on web, mobile, and desktop devices, ensuring a consistent learning experience.  Responsive design ensures optimal viewing on different screen sizes.
*   **Modern, Accessible UI:** Built with Tailwind CSS, the user interface boasts a sleek, contemporary design that is both engaging and easy to navigate, including dark mode support for accessibility.

## Technical Architecture

### Frontend

*   **Technology:** React.js with Vite
*   **Styling:** Tailwind CSS (with dark mode support)
*   **Purpose:** Provides a dynamic and responsive user interface for interacting with the platform.

### Backend

*   **Technology:** Node.js with Express.js
*   **Purpose:** Handles API requests, business logic, data processing, and communication with the database and AI services.

### Database

*   **Technology:** PostgreSQL
*   **ORM:** Prisma ORM
*   **Purpose:** Stores user data, learning content, progress tracking information, and other persistent data.

### Authentication

*   **Method:** JWT (JSON Web Tokens)
*   **Purpose:** Securely authenticates users and manages access to protected resources.

### AI Integration

*   **Model:** Google Gemini (gemini-1.5-pro)
*   **Library:** LangChain.js
*   **Purpose:** Powers the AI-driven features, including personalized learning, quiz generation, AI tutor, and adaptive learning paths.

## AI Integration Details

NexLearn AI leverages LangChain.js to orchestrate interactions with Google Gemini.  The process generally involves:

1.  **Prompt Engineering:**  LangChain.js dynamically constructs prompts for Gemini based on user context (e.g., current lesson, past performance, specific questions).  This includes fetching relevant data from the database (syllabus, grades, etc.).
2.  **API Call:** LangChain.js makes API calls to Gemini, sending the crafted prompt.
3.  **Response Processing:**  The response from Gemini (e.g., generated feedback, quiz questions, explanations) is parsed and processed by LangChain.js.
4.  **Data Storage:**  Results are stored in the database (e.g., grades, progress updates).
5.  **UI Update:**  The frontend is updated with the processed information to provide feedback to the user.

## Future Enhancements

*   **AI-Generated Study Summaries:** Condense complex topics into digestible key points.
*   **Voice-Based AI Tutor:** Enable interactive learning sessions through voice interaction.
*   **Gamification:** Implement reward systems to boost student engagement.
*   **Offline Learning Support:** Provide access to learning materials even with limited connectivity.
*   **Multi-Language Support:** Expand accessibility globally.
*   **Integration with Learning Management Systems (LMS):** Seamlessly integrate with existing educational platforms.

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn)
*   PostgreSQL Database
*   Google Gemini API Key

### Installation

1.  Clone the repository: `git clone https://github.com/YOUR_USERNAME/NexLearn-AI.git`
2.  Navigate to the project directory: `cd NexLearn-AI`
3.  Install dependencies: `npm install` (or `yarn install`)

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables (replace with your actual values):