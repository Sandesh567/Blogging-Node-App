require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");

const Blog = require("./models/blog");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const {
    checkForAuthenticationCookie,
} = require("./middlewares/authentication");

const app = express();

const PORT = process.env.PORT || 8000;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codespot";

mongoose
    .connect(MONGODB_URI)
    .then((e) => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err)); // Added error handling

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));