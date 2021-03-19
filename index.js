const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

// morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// port
const { port } = require("./config");

// ejs template engine
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is listening on localhost: ${port}`);
});

// routes
const homeRouter = require("./routes/home");

app.use("/", homeRouter);
