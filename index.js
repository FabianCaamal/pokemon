const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
});

app.get("/:name", (req, res) => {
    res.send(req.params.name)
});

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Sercidor corriendo en http://localhost:" + port)
})