
const express = require("express")
const app = express()
app.get("/", (req, res) => {
res.send("<h1>This is the Node data</h1>")
})
app.listen(3000, () => {
  console.log("listning from port 3000")
})