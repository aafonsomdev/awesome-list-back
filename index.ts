import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World with typescript!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
