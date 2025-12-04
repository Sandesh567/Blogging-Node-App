# ✨ Blogging-Node-App ✨




This Node.js application provides a robust platform for managing blog posts, allowing users to create, read, update, and delete their content seamlessly. Built with Express.js and EJS for dynamic templating, it offers a professional and interactive user experience for content creators.

## Key Features

✅ User Account Management (Login/Register)
✅ Create, Read, Update, Delete (CRUD) Blog Posts
✅ Dynamic Content Rendering with EJS
✅ Secure Authentication using JSON Web Tokens (JWT)
✅ Persistent Data Storage with MongoDB via Mongoose
✅ File Uploads for Media (e.g., images) using Multer

## Tech Stack

This project leverages a modern JavaScript ecosystem:

*   **Primary Languages:** JavaScript
*   **Backend Framework:** Node.js, Express.js
*   **Templating Engine:** EJS
*   **Database:** MongoDB
*   **ORM/ODM:** Mongoose
*   **Authentication:** JSON Web Tokens (jsonwebtoken)
*   **Environment Variables:** Dotenv
*   **File Uploads:** Multer
*   **Other Key Libraries:** `body-parser`, `cookie-parser`, nodemon

## Installation

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sandesh567/Blogging-Node-App.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Blogging-Node-App
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file:**
    In the root directory of the project, create a file named `.env` and add your environment variables. This project requires the following:
    ```ini
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/blogging_app_db # Replace with your MongoDB connection string
    JWT_SECRET=your_strong_jwt_secret_key             # Generate a strong, unique secret
    ```
    *Ensure MongoDB is running and accessible at the specified `MONGO_URI`.*

## Usage

After completing the installation and configuration steps, you can start the application:

1.  **Start the server:**
    ```bash
    npm start
    ```

2.  **Access the application:**
    Open your web browser and navigate to `http://localhost:3000` (or the port you specified in your `.env` file).

    *   You can then register an account, log in, and begin creating and managing your blog posts through the intuitive web interface.*



