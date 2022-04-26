const express = require('express');
const app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500kb' }));
const globalConfig = require('./server/services/utils/globalConfig')
// const logger = require("./server/logger/winstonLogger");
const dbWapper = require('./server/services/utils/dbWapper');
const cors = require("cors");
require("dotenv").config();

const ResponseWrapper = require('./server/services/utils/responseWapper')

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // For legacy browser support
  };
  app.use(cors(corsOptions));
//controller
const ControlInterceptor = require('./server/interceptor/controllerinterceptor')

function connectDb() {
    // console.log(' is connected');
    new Promise((resolve, reject) => {
        if (dbWapper)
            return resolve();
    }).then(async () => {
        var responseWrapper = new ResponseWrapper();
        var objCollection = {
            app: app,
            responseWrapper: responseWrapper,
        };
        new ControlInterceptor(objCollection);
        // console.log(process.env.NODE_ENV)
        //NODE_ENV is  a system environment variable that Node exposes into running scripts
        if(process.env.NODE_ENV.trim()==="dev"){
            console.log("development mode");
            console.log(process.env.NODE_ENV,"process.env.NODE_ENV.trim()===dev");
        };
        if(process.env.NODE_ENV.trim()==="stg"){
            console.log("stg mode");
            console.log(process.env.NODE_ENV,"process.env.NODE_ENV.trim()===stg");
        };
        if(process.env.NODE_ENV.trim()==="local"){
            console.log("local mode");
            console.log(process.env.NODE_ENV,"process.env.NODE_ENV.trim()===local");
        };
        server.listen(global.config.port);
        console.log('server running at port ' + global.config.port);
    });
}

connectDb();





