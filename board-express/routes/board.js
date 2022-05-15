import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import BoardService from '../service/board.js'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.post('/addBoard', cors(corsOptions), (req, res) => {
    console.log('express 진입')
    BoardService().addBoard(req, res)
});
app.get(
    '/boardList', cors(corsOptions), (req, res) => {
        BoardService().getBoards(req, res)
  });

export default app