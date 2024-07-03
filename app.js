const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/authRoutes.js");

app.use(express.json());

mongoose.connect("mongodb+srv://Abhishek:1212@cluster0.u6tquvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log(`Port is running at 3000`);
});
