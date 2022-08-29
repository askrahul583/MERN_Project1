const express = require("express");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
connectDB();
app.use(express.json());
// console.log(process.env.PORT);
// console.log(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   console.log(req.params);
//   res.send(note);
// });

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
