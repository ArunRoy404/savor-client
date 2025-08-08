# 🍽️ Savor - Restaurant Management Web Application

> A full-featured restaurant management web app where users can register, log in, manage their own food items, browse all foods, purchase meals, manage orders, and more!

# 📍 Project Overview

**Savor** is a modern and responsive restaurant management system that allows users to interact with the platform in meaningful ways. From managing food listings to purchasing dishes and viewing top-rated meals, this application provides a seamless experience using cutting-edge technologies like React, Tailwind CSS, Firebase, Swiper.js, and TanStack Query.

---

# 🌐 Live Links

- 🔗 **Client (Frontend)**: [https://savor-client.vercel.app](https://savor-client.vercel.app) 
- 🖥️ **Server (Backend)**: [https://savor-server.vercel.app](https://savor-server.vercel.app) 

---

# 🎯 Purpose

The goal of this project is to provide a scalable and user-friendly platform for managing restaurant operations, including:

- User authentication & authorization
- Food item management (add, update, delete)
- Order management (purchase, cancel, view)
- Special offers and top foods display
- Testimonials and gallery
- Dark/Light mode toggle
- Secured API communication using Firebase access tokens

---

# ✨ Key Features

| Feature                        | Description |
|-------------------------------|-------------|
| 🔐 **User Authentication**     | Secure login/register system using Firebase Auth |
| 🧑‍🍳 **Food Management**        | Users can add, edit, or delete their own food items |
| 🛒 **Purchase System**         | Buy any food except those added by the same user |
| 📋 **Order Management**        | View, cancel, and manage placed orders |
| 📸 **Gallery Integration**     | Implemented using "Yet Another React Lightbox" |
| 🍔 **All Foods Page**          | See all available dishes in one place |
| 🎠 **Banner Slider**           | Beautiful banner slider using Swiper.js |
| 💸 **Special Offers Section**  | Highlight discounted or promotional foods |
| ⬆️ **Top Foods Sorting**        | Display popular foods based on purchase count |
| 📝 **Testimonials**            | Showcase customer reviews |
| ❓ **How It Works**            | Easy-to-understand explanation for new users |
| 📚 **About Us**                | Informative section about the restaurant |
| 🌙 **Dark / Light Theme Toggle** | Toggle between light and dark UI modes |
| 🔍 **API Handling**            | Uses Axios interceptors and TanStack Query for clean, secure data fetching |
| 🔐 **Secure Data Flow**        | Firebase user access token used for authenticated backend requests |
| 🚫 **Unauthorized / Forbidden Handling** | Handles 401 and 403 errors gracefully with redirection and feedback |
| 🔐 **Secure Data Flow**        | Firebase user access token used for authenticated backend requests |

---

# 🧰 Technologies & Packages Used

Here are some of the main packages and tools used in this project:

## Main Technologies Used

- React for building the frontend user interface  
- Node.js and Express.js for backend server  
- MongoDB as the database  
- Firebase for user authentication  
- Tailwind CSS for styling  
- Vercel and Render for deployment  
  

<br/>


## Dependencies Used
**Frontend:**
- react  
- react-dom  
- react-router  
- tailwindcss  
- daisyui  
- axios  
- @tanstack/react-query  
- firebase  
- framer-motion  
- react-hot-toast  


**Backend:**
- express  
- mongoose  
- cors  
- jsonwebtoken  
- dotenv  
- bcryptjs  

---

<br/>

# 🪜 Savor - Local Development Setup Guide
Follow these steps to run the Savor project on your local machine.

## Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- Git


## Step-by-Step Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/ArunRoy404/savor-client.git
   cd savor-client
   ```

2. **Set up environment variables**
    Create a .env file in the root directory and add the following variables with your own credentials:

    ```bash
        VITE_apiKey=YOUR_FIREBASE_API_KEY
        VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
        VITE_projectId=YOUR_FIREBASE_PROJECT_ID
        VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
        VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
        VITE_appId=YOUR_FIREBASE_APP_ID
    ```

    You'll need to:
    - Create a Firebase project at https://firebase.google.com/


3. **Install dependencies**
   ```bash
        npm install
        # or
        yarn install
   ```
    
4. **Run The Development Server**
   ```bash
        npm run dev
        # or
        yarn dev
   ```

5. **Access the application**
    Open your browser and visit: http://localhost:5173

---

# 📸 Screenshot
![alt text](image.png)