import express from "express";
const app = express();
const port = "3000";

app.get("/", (req, res) => {
  res.send("Hello Worddddld!");
  console.log("Response sent");
});
app.post("/", (req, res) => {
  res.send("lkhagvaa");
  console.log("Response sent");
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
