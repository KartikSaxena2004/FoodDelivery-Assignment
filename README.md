# Food Delivery Order Manager

A comprehensive React-based web application for managing food delivery orders, featuring role-based authentication, real-time order tracking, and an admin dashboard for delivery management.

## 🚀 Features

### 👤 User Features
*   **Authentication**: Secure Login/Signup functionality.
*   **Browse & Order**: capable of browsing restaurants/items (implied structure) and adding to cart.
*   **Cart & Checkout**: Manage selected items and proceed to checkout.
*   **My Orders**: Track personal order history and status.
*   **Real-time Tracking**: View delivery agent details and order status updates.

### 🛡️ Admin Dashboard
*   **Secure Access**: Protected routes for admin-only access.
*   **Order Overview**: View all incoming orders in a centralized dashboard.
*   **Advanced Filtering**:
    *   **Payment Status**: Filter by Paid, Unpaid, or All orders.
    *   **Distance**: Filter orders within a specific delivery radius (Max KM).
*   **Order Management**:
    *   **Status Updates**: Change order status (Preparing, Out for Delivery, Delivered).
    *   **Payment Toggle**: Manually mark orders as Paid/Unpaid.
    *   **Delivery Assignment**: Automated logic to prioritize nearest unpaid orders (backend/logic dependent).

## 🛠️ Tech Stack

*   **Frontend**: React (v19), Vite
*   **Routing**: React Router DOM (v7)
*   **Styling**: Vanilla CSS with Glassmorphism design principles
*   **State Management**: React Context API (OrderContext, AuthContext, CartContext)
*   **Linting**: ESLint

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd food-delivery
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🔑 Usage

### Admin Access
To access the Admin Dashboard, use the following demo credentials (if applicable/hardcoded for demo):
*   **Username**: `admin`
*   **Password**: `admin`

Navigate to `/admin` to view the dashboard.

### Order Management
1.  **Filtering**: Use the dropdown to filter by payment status or input a distance to filter by range.
2.  **Status**: Click the status dropdown on an order card to update its progress.
3.  **Payment**: Click the "PAID/UNPAID" badge to toggle payment status.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Navbar, OrderList, etc.)
├── context/         # React Context for global state (Auth, Cart, Orders)
├── pages/           # Page components (Home, AdminDashboard, Login, etc.)
├── App.jsx          # Main application component & Routing
└── index.css        # Global styles
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
