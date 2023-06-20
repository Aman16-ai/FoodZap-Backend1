require("dotenv").config();
const express = require("express");
const rootRouter = require("./src/routes/index")
const app = express();
const PORT = 5000;

const connectDB = require("./src/config/dbConfig");
connectDB();

app.use(express.json());
rootRouter(app)

app.get("/", (req, res) => {
  return res.status(200).json({ Message: "Welcome to the FoodZap Api" });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
