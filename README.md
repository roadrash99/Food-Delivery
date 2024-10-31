

# Full Stack Food Ordering App

This repository contains a full-stack food ordering application built with **React.js** for the frontend, **MongoDB** as the database, **Express** and **Node.js** for the backend, and **Stripe** for payment processing. This application includes a user-friendly frontend for customers, an admin panel for managing orders and products, and a backend server with REST APIs for data management and authentication.

---

## Features

- **User Authentication**: Create and manage user accounts, including secure login and registration.
- **Product Catalog**: A dynamic display of food items available for ordering.
- **Shopping Cart**: Add, update, or remove items from the cart and proceed to checkout.
- **Order Processing**: Complete the order with online payment via the Stripe payment gateway.
- **Order Management**: Admin panel to manage inventory, track order statuses, and update product details.
- **Order Tracking**: Real-time updates for users on their order statuses.

---

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/roadrash99/Food-Delivery.git
   cd Food-Delivery
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder and add the following variables:
     ```
     MONGO_URI=<Your MongoDB Connection URI>
     STRIPE_SECRET_KEY=<Your Stripe Secret Key>
     JWT_SECRET=<A random string for JWT encryption>
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

4. **Run the Application**:
   - Start the backend server:
     ```bash
     cd ../backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm start
     ```
   - Access the application at `http://localhost:3000`

---

## Project Structure

- **Frontend** (React.js)
  - **Components**: Reusable UI components
  - **Pages**: Separate views for each page (e.g., Home, Cart, Checkout)
  - **Services**: API calls for the backend
- **Backend** (Node.js, Express.js)
  - **Routes**: Define endpoints for products, users, orders, and authentication
  - **Models**: Mongoose models for database interactions
  - **Controllers**: Handle business logic for each route

---

## Usage

1. **User Registration & Login**: Create an account or log in as a registered user.
2. **Browse Food Items**: View the available food items and add them to your cart.
3. **Shopping Cart**: Manage your cart items before proceeding to checkout.
4. **Checkout and Payment**: Use Stripe for secure online payments.
5. **Track Orders**: View and track the status of placed orders.

---

## Admin Panel

1. **Order Management**: Track and update order statuses.
2. **Inventory Management**: Add, update, or delete food items in the database.

---

