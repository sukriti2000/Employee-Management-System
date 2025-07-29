# 🧑‍💼 Employee Management System

A full-stack **Employee Management System** built with **Node.js**, **Express**, **Apollo Server**, **GraphQL**, and **MongoDB**. This project helps manage employee data with features like filtering, updating, deleting, and retirement tracking.

## 🚀 Features

- 🔍 Filter and view employees by type or department
- 🧾 Fetch detailed employee profiles by ID
- 🆕 Add new employees
- ✏️ Update existing employee records
- ❌ Delete employee records
- 🧓 Calculate and display retirement data
- 🌐 Full GraphQL API with Apollo Server
- 📦 Environment-based configuration using `.env` files



## 🔌 Technologies Used

- **Node.js** (Express.js)
- **Apollo Server** (GraphQL API)
- **MongoDB** (Data storage)
- **GraphQL** (API query language)
- **dotenv** (Environment variable configuration)
- **ESLint** (Code quality)

# ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/employee-management-system.git
cd employee-management-system
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
Create a .env file in the root directory and add:

env
Copy
Edit
PORT=3000
MONGO_URL=mongodb+srv://your-user:your-password@cluster.mongodb.net/dbname
CORS_STATUS=true
UI_SERVER_PORT=8000
UI_API_ENDPOINT=http://localhost:3000/graphql
4. Start the Server
bash
Copy
Edit
npm start
You should see:

pgsql
Copy
Edit
Successfully connected to database!
Server started listening on port 3000...
UI started on port 8000...
🛠️ GraphQL Playground
Navigate to http://localhost:3000/graphql to explore the GraphQL API and run queries/mutations.

📮 Sample Queries
➕ Add Employee
graphql
Copy
Edit
mutation {
  createNewEmployee(emp: {
    id: "EMP001",
    FirstName: "John",
    LastName: "Doe",
    Age: 30,
    DateOfJoining: "2020-01-01",
    DOB: "1990-01-01",
    Title: "Developer",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: 1
  }) {
    FirstName
  }
}
📋 Get All Employees
graphql
Copy
Edit
query {
  getAllEmployees(filter: "FullTime") {
    id
    FirstName
    Department
  }
}
