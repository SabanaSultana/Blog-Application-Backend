const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");

dotenv.config();

connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on mode port no ${PORT}`);
});
