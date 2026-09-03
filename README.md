# 🏥 Health Care Medical Store

A simple, responsive **Medical Store Management System** built with HTML, CSS, and Vanilla JavaScript.

This project is designed to help a medical store manage medicines, monitor stock, record sales, search medicines, and generate customer bills from a clean dashboard interface.

---

## 📌 Project Overview

**Health Care Medical Store** is a frontend-based medical inventory and billing application.

The system allows the user to:

- Add new medicines
- Store medicine details in the browser
- View and manage available stock
- Edit or delete medicine records
- Sell medicines and automatically update stock
- Maintain sales history
- Search for medicines
- Monitor low-stock medicines
- Monitor medicines approaching expiry
- Generate printable bills
- Download bills as PDF
- Switch between Light Mode and Dark Mode

> **Note:** This project currently uses browser `localStorage` for data storage. It does not require a backend server or database.

---

## ✨ Features

### 📊 Dashboard

The dashboard provides a quick overview of the store:

- Total number of medicines
- Total available stock
- Low-stock medicine count
- Medicines approaching expiry
- Low-stock medicine list

### 💊 Add Medicine

Medicine records can be added with:

- Medicine name
- Quantity
- Purchase price
- Selling price
- Expiry date
- Storage/location information

The data is saved in the browser using `localStorage`.

### 📦 Stock Management

The Stock page displays medicine inventory in a table.

Available actions include:

- View medicine details
- Edit medicine
- Delete medicine

### 🛒 Sell Medicine

The selling module allows the user to:

1. Enter the medicine name
2. Enter the quantity to sell
3. Check whether the medicine exists
4. Check available stock
5. Deduct the sold quantity automatically
6. Save the transaction in Sales History

The system also prevents selling more medicine than the available stock.

### 🔍 Search Medicine

Search medicines by name and view the stored medicine information.

### 📊 Sales History

Every successful sale is recorded with:

- Date
- Medicine name
- Quantity sold

### 🧾 Bill Generation

The billing module supports:

- Customer name
- Medicine name
- Quantity
- Automatic price calculation
- Total amount
- Print Bill
- Download Bill as PDF

PDF generation uses **jsPDF** through its CDN.

### 🌙 Dark Mode

The application includes a Light/Dark Mode toggle.

The selected theme is stored in `localStorage`, so the preference remains available when navigating between pages.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Layout, styling and responsive design |
| JavaScript (ES6+) | Application logic and DOM manipulation |
| LocalStorage | Browser-based data persistence |
| jsPDF | PDF bill generation |
| SVG | Store logo |

---

## 📁 Project Structure

```text
medical-store/
│
├── index.html
├── add-medicine.html
├── edit-medicine.html
├── sell-medicine.html
├── stock.html
├── search-medicine.html
├── sales-history.html
├── bill.html
│
├── script.js
├── style.css
├── theme.js
│
├── assets/
│   └── logo.svg
│
└── js/
    ├── bill.js
    ├── dashboard.js
    ├── edit.js
    ├── sales.js
    ├── search.js
    ├── sell.js
    └── stock.js
```

---

## 🚀 How to Run the Project

### 1. Download or Clone the Project

Download the project and extract it on your computer.

### 2. Open the Project

Open the `medical-store` folder in **Visual Studio Code**.

### 3. Run the Website

You can open `index.html` directly in your browser.

For a better development experience, use the **Live Server** extension in VS Code.

### 4. Open the Dashboard

Start from:

```text
index.html
```

---

## 💾 Data Storage

This project uses the browser's `localStorage` instead of a database.

The main data keys used by the application are:

```text
medicines
sales
editMedicineIndex
medicalStoreTheme
```

### Medicines

Medicine information is stored under:

```javascript
localStorage.getItem("medicines")
```

### Sales

Sales records are stored under:

```javascript
localStorage.getItem("sales")
```

### Theme

The selected Light/Dark Mode is stored under:

```javascript
localStorage.getItem("medicalStoreTheme")
```

Because the application uses `localStorage`, the data is stored locally in the current browser.

---

## 🧮 Stock Calculation

When a medicine is sold, the system updates the available quantity:

```text
Remaining Stock = Current Stock - Sold Quantity
```

Example:

```text
Current Stock = 50
Sold Quantity = 8

Remaining Stock = 42
```

The application also checks that the requested selling quantity does not exceed the available stock.

---

## ⚠️ Important Notes

- Data is stored only in the browser.
- Clearing browser site data can remove the stored medicine and sales records.
- Data is not synchronized between different computers or browsers.
- The current version is primarily a frontend project.
- PDF generation requires an internet connection because jsPDF is loaded from a CDN in `bill.html`.

---

## 🔮 Future Improvements

This project can be extended into a complete production-level medical store management system by adding:

- 🔐 User authentication and login
- 🗄️ MongoDB database
- ⚙️ Node.js/Express backend
- 👥 Multiple staff accounts
- 🧾 Multi-item invoices
- 💳 Payment status and payment methods
- 📈 Sales and revenue analytics
- 📦 Supplier management
- 🔔 Automatic stock alerts
- ⏰ Expiry notifications
- 📥 Export stock data to Excel/CSV
- ☁️ Cloud database and backup
- 📱 Improved mobile/tablet interface
- 🏪 Store profile and invoice customization

---

## 🔒 Security Considerations

Since this version is frontend-only:

- No server-side authentication is implemented.
- Data is stored locally and should not be considered secure for production use.
- Sensitive business information should not be stored in browser `localStorage`.
- A backend with authentication and database-level security should be used for a real medical store.

---

## 🎯 Learning Objectives

This project demonstrates practical use of:

- HTML page structure
- CSS layouts and reusable styling
- JavaScript functions
- DOM manipulation
- Event handling
- Form handling
- Arrays and objects
- `localStorage`
- CRUD-style operations
- Inventory calculations
- Search functionality
- Sales tracking
- Dynamic HTML generation
- Theme persistence
- PDF generation with JavaScript

---

## 👨‍💻 Project Type

**Project:** Medical Store Management System  
**Category:** Web Development / Inventory Management  
**Architecture:** Frontend Application  
**Storage:** Browser LocalStorage  
**Backend:** Not included in the current version

---

## 📄 License

This project is intended for **educational and portfolio purposes**.

You are free to modify and improve the project for learning and personal use.

---

## ⭐ Support

If you find this project useful, consider improving it with a backend, database, authentication, advanced billing, and reporting features to make it suitable for real-world medical store management.
