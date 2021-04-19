const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());


const publicDirectory = path.hion(__dirname, "client/build");
app.use(express.static(publicDirectory));

app.get("/api", (req, res) => {
    res.send([{ firstName: "cusromer one", lastName: "customer two" }, { firstName: "customer three", lastName: "customer four" }]);
});

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});