const mysql = require('mysql')
const logger = require("../../logger/winstonLogger");


let conn;
let DBCrendentials = {
    // connectionLimit: global.config.connectionLimit,
    host: global.config.host,
    user: global.config.user,
    password: global.config.password,
    database: global.config.database,
    debug: false
}
if (global.config.mode === "local") {
    conn = mysql.createConnection(DBCrendentials)
    conn.connect((err) => {
        if (err) {
            logger.error('DBCrendentialsNotFound', err)
        }
        else {
            logger.info(`[DBCrendentialsFetched]`);
        }
    })
};


var executeQueryPromise = function (queryString, request) {
    return new Promise((resolve, reject) => {
        try {

            conn.query(queryString, function (err, rows, fields) {
                if (!err) {
                    logger.verbose(`${(request)}${queryString}`, { type: 'mysql', db_response: null, request_body: null, error: err });
                    resolve(rows[0]);
                } else {
                    logger.error(`${(request)} ${queryString}`, { type: 'mysql', db_response: null, request_body: null, error: err });
                    reject(err);
                }
            });

        } catch (exception) {
            logger.crit(`${(request)}[${flag}] ERROR WHILE GETTING MySQL CONNECTON`, { type: 'mysql', db_response: null, request_body: null, error: exception });
            reject(exception);
        }
    });
};

module.exports = {
    executeQueryPromise: executeQueryPromise,
}


