import express from "express";

const app: express.Application = express();

const port: number = 8000;

app.get("/", (req, res) => {
    res.send("TS");
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
