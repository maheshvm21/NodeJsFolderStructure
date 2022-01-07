const express = require('express');
const app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500kb' }));
const globalConfig = require('./server/services/utils/globalConfig')
// const logger = require("./server/logger/winstonLogger");
const dbWapper = require('./server/services/utils/dbWapper');

const ResponseWrapper = require('./server/services/utils/responseWapper')

//controller
const ControlInterceptor = require('./server/interceptor/controllerinterceptor')


function connectDb() {
    console.log('redis is connected');
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
        server.listen(global.config.port);
        console.log('server running at port ' + global.config.port);
    });
}

connectDb();





