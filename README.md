
# 🎯 Personal Bucket List API

A simple, full-stack project to manage a personal bucket list using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and an optional frontend built with HTML/CSS/JavaScript.

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
- [Database Integration](#database-integration)
- [Running the Project Locally](#running-the-project-locally)
- [Sample API Requests (curl)](#sample-api-requests-curl)
- [Frontend Details](#frontend-details)
- [Project Structure](#project-structure)
- [Author](#author)

## 📌 Project Overview

This project exposes a custom API server for managing a personal bucket list with full CRUD functionality. Users can:
- Add new items to their bucket list.
- View all items.
- Update item details.
- Mark items as completed.
- Delete items.

A simple and stylish frontend is included to interact with the API.

## 🚀 Features

✔️ Custom REST API built with **Node.js + Express.js**  
✔️ **MongoDB** integration via **Mongoose**  
✔️ CRUD Operations (Create, Read, Update, Delete)  
✔️ Frontend (Optional but provided) with clean UI and styling  
✔️ API tested via browser, curl & Postman  

## 🛠️ Tech Stack

- Backend: **Node.js, Express.js**
- Database: **MongoDB** (via **Mongoose**)
- Frontend: **HTML, CSS, Vanilla JavaScript**
- API Testing: **Postman / curl**

## 📑 API Documentation

### Base URL:
```
http://localhost:5000/api/bucket
```

### ✅ 1. Get All Bucket List Items

- **Method**: GET
- **URL**: `/api/bucket`
- **Description**: Retrieve all bucket list items.

### ✅ 2. Add a New Item

- **Method**: POST
- **URL**: `/api/bucket`
- **Request Body**:
```
{
  "title": "Learn Guitar",
  "category": "Hobby"
}
```

### ✅ 3. Update an Existing Item

- **Method**: PUT
- **URL**: `/api/bucket/:id`
- **Request Body**:
```
{
  "title": "Learn Guitar Perfectly",
  "category": "Music"
}
```

### ✅ 4. Delete an Item

- **Method**: DELETE
- **URL**: `/api/bucket/:id`

### ✅ 5. Mark an Item as Completed

- **Method**: PATCH
- **URL**: `/api/bucket/:id/complete`

## 🗄️ Database Integration

- **MongoDB** (local/Atlas) via **Mongoose**
- Schema:
```
{
  title: String,
  category: String,
  isCompleted: Boolean (default: false)
}
```

## 🏃 Running the Project Locally

### Backend:
```
cd backend
npm install
npm start
```

### Frontend:
Open `frontend/index.html` in your browser.

## 🔗 Sample API Requests (curl)

```
curl http://localhost:5000/api/bucket
```

## 🌐 Frontend Details

- Table view
- Add, Edit, Delete, Mark Complete

## 🏗️ Project Structure

```
bucket-list-api/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   └── index.html
└── README.md
```

## 👩‍💻 Author

- Developed by **Apoorva Aanand**

## ✅ Status: Fully Completed and Working
