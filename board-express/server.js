import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import db from './models/index.js'
import api from "./routes/api.js"
import board from "./routes/board.js"
import index from "./routes/index.js"
import getResponse from "./lambdas/getResponse.js"
import applyDotenv from './lambdas/applyDotenv.js'

async function startServer() {
    const app = express();
    const {mongoUri, port } = applyDotenv(dotenv)
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use("/", index);
    app.use("/api", api);
    app.use("/board", board);
    app.use(morgan('dev'))
    db
        .mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log(' ### 몽고DB 연결 성공 ### ')
        })
        .catch(err => {
            console.log(' 몽고DB와 연결 실패', err)
            process.exit();
        });
    
        app.all("*", function(_req, res) {
            return getResponse.notFoundResponse(res, "페이지를 찾을 수 없습니다");
          });
    
        app.use((err, _req, res) => {
            if(err.name == "UnauthorizedError"){
              return getResponse.unauthorizedResponse(res, err.message);
            }
          });
  
    app.listen(port, () => {
        console.log('***************** ***************** *****************')
        console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
        console.log('***************** ***************** *****************')
    })
}
startServer()