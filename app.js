const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
const userRoutes = require("./routes/UserRoutes");
const app = express();
const PORT = process.env.PORT || 4001;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);
app.use("/api/user", userRoutes);
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
