const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Pass base URL to all templates
app.use((req, res, next) => {
  res.locals.baseUrl = req.protocol + "://" + req.get("host");
  next();
});

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define a simple route
app.get("/", (req, res) => {
  res.render("index", {
    message: "Hello, Express!",
    baseUrl: res.locals.baseUrl,
  });
});

app.get("/pakistan", async (req, res) => {
  const endPoint =
    "https://newsapi.org/v2/everything?q=pakistan&apiKey=3c7b688ddd194295bca50970b3d691d0";
  try {
    const result = await axios.get(endPoint);
    console.log("Result: ", result.data);
    res.render("pakistan", { news: result.data.articles });
  } catch (err) {
    console.log("Error: ", err);
    res.render("pakistan", { message: "Error fetching pakistan news!" });
  }
});

// Afghanistan route
app.get("/afghanistan", async (req, res) => {
  const endPoint =
    "https://newsapi.org/v2/everything?q=afghanistan&apiKey=3c7b688ddd194295bca50970b3d691d0";
  try {
    const result = await axios.get(endPoint);
    console.log("Result: ", result.data);
    res.render("afghanistan", { news: result.data.articles });
  } catch (err) {
    console.log("Error: ", err);
    res.render("afghanistan", { message: "Error fetching afghanistan news!" });
  }
});

// India route
app.get("/india", async (req, res) => {
  const endPoint =
    "https://newsapi.org/v2/everything?q=india&apiKey=3c7b688ddd194295bca50970b3d691d0";
  try {
    const result = await axios.get(endPoint);
    console.log("Result: ", result.data);
    res.render("india", { news: result.data.articles });
  } catch (err) {
    console.log("Error: ", err);
    res.render("india", { message: "Error fetching india news!" });
  }
});

// China route
app.get("/china", async (req, res) => {
  const endPoint =
    "https://newsapi.org/v2/everything?q=china&apiKey=3c7b688ddd194295bca50970b3d691d0";
  try {
    const result = await axios.get(endPoint);
    console.log("Result: ", result.data);
    res.render("china", { news: result.data.articles });
  } catch (err) {
    console.log("Error: ", err);
    res.render("china", { message: "Error fetching china news!" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
