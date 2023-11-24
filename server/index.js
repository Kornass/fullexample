const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 4050;
app.use(require("express").json());
app.use(require("express").urlencoded({ extended: true }));
app.use(require("cors")());

(async function () {
  try {
    await require("mongoose").connect(process.env.MONGO);
    console.log("Connected to the DB ✅");
  } catch (error) {
    console.log("ERROR: Your DB is not running, start it up ☢️");
  }
})();

app.use("/category", require("./routes/categories.js"));
app.use("/product", require("./routes/products.js"));

app.listen(port, () => console.log(`🚀 Listening on port: ${port} 🚀`));
