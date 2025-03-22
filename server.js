const { name } = require("ejs");
const express = require("express");
const app = express()
app.set("view engine", "ejs");
app.set("views", "./views");
const port = 3000;

const userRouter = require("./routers/users");
app.use("/users", userRouter);

app.get("/", (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  res.render('index', );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
