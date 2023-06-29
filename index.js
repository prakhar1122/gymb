import http from "http";
import express from "express";
import cors from "cors";
import memberrouter from "./routes/member.js"
import "./config/mongoose.js"
const app = express();
const port = process.env.port || 4000;
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/member", memberrouter);
// app.use(logger("dev"));

app.use('*', (req, res) => {
    return res.status(404).json({
        succesful: false,
        message: "roung route"
    })
});

const server = http.createServer(app);
server.listen(port, () => { console.log("server started") });