# 🏬 Store API

A **RESTful API** built with **Node.js, Express, and MongoDB (Mongoose)** that supports **filtering, sorting, pagination, and field selection** for products.  
This project demonstrates advanced query features and clean API design for e-commerce or product catalog systems.

---

## ✨ Features

- 🔎 **Filtering** by name, company, featured flag, and numeric fields (e.g., price, rating).  
- ↕️ **Sorting** by one or multiple fields (`sort=name,-price`).  
- 📑 **Field selection** to return only the fields you need (`fields=name,price`).  
- 📄 **Pagination** with page and limit query parameters.  
- ⚡ Centralized error handling and not-found middleware.  
- 🗄️ MongoDB (Mongoose) integration with async/await.

---

⚙️ Setup & Run Locally
1. Clone the repository
git clone https://github.com/<your-username>/task-manager.git
cd task-manager

### 2. Install dependencies 
npm install

### 3. Set up the env
PORT=your-port-here
MONGO_URI=your-mongodb-uri-here

### 4. Run Server
npm run start

###5.  For development with auto-reload
npm run dev