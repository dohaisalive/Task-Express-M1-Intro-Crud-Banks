const express = require("express");
const accountRoutes = require("./apis/accounts/accounts.routes");
const connectDB = require("./database/connection");

const app = express();
connectDB();

app.use(express.json()); //middleware
app.use("/api/accounts", accountRoutes);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`this app is running in on localhost:${PORT}`)
);
