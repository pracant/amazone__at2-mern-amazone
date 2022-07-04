import express from "express";
import data from "./data.js";
const port = process.env.POrt || 5000;
const app = express();
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});
