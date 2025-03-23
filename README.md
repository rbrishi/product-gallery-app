# 🛍️ Product Gallery App

A fast and lightweight e-commerce product gallery built using **React** and **Vite**. This app includes dark mode, infinite scrolling, debounced search, and lazy-loaded images for better performance.

---

## 📌 Prerequisites

Ensure you have the following installed before running the application:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git**

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rbrishi/product-gallery-app.git
cd product-gallery-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:5173/** by default.

---

## 🌟 Features Implemented

✅ **Light & Dark Mode** – Toggle between themes, stored in localStorage.
✅ **Debounced Search** – Optimized API requests to filter products.
✅ **Lazy Loading** – Product images load only when visible.
✅ **Infinite Scrolling** – Load more products as the user scrolls.
✅ **Error Handling** – Displays messages if API calls fail.
✅ **Responsive Design** – Fully optimized for mobile and desktop views.

---

## 🔗 API Usage Details

The application fetches products from **Fake Store API**:

### 📌 Get All Products
```bash
GET https://fakestoreapi.com/products
```
_Response:_ Returns an array of product objects.

### 📌 Get Single Product by ID
```bash
GET https://fakestoreapi.com/products/{id}
```
_Response:_ Returns a product object with details.

Example Product Object:
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": { "rate": 3.9, "count": 120 }
}
```

---

## 🛠️ Project Structure

```
product-gallery-app/
├── src/
│   ├── components/     # UI Components
│   │   ├── SearchBar.js   # Search bar with debounced input
│   │   ├── ProductList.js # Displays product grid
│   │   ├── ProductCard.js # Lazy-loaded product cards
│   ├── context/        # Theme Context API
│   ├── hooks/          # Custom Hooks (useDebounce)
│   ├── pages/          # Page Components (Home.js)
│   ├── App.js          # Main App Component
│   ├── main.jsx        # Entry Point
├── public/             # Static Assets
├── package.json        # Dependencies & Scripts
├── README.md           # Documentation
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. Enjoy coding! 🚀