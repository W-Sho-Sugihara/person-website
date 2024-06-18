const express = require("express");
const app = express();
// const path = require("path");

const port = 3030;
// const __dirname = path.dirname(__filename);

// app.use("/", express.static("public"));
app.use("/", express.static("public/license-parser-build"));
// app.get("/license-parser", (req, res) => {
//   res.send("sent");
// });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
