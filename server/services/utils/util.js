const db = require('./dbWapper');
// MySQL for generating prepared statements
const mysql = require('mysql');
var moment = require('moment');

this.getCurrentUTCTime = function (format) {
    var now = moment().utc().format(format || "YYYY-MM-DD HH:mm:ss");
    return now;
};
this.getQueryString = function (callName, paramsArr) {
    let queryString = '',
        preparedQueryString;
    if (paramsArr.length > 0) {
        queryString = `CALL ?? (${new Array(paramsArr.length).fill('?').join(', ')});`;
        preparedQueryString = mysql.format(queryString, [String(callName)].concat(paramsArr));
        return preparedQueryString;
    }
    else {
        queryString = `CALL ?? (${new Array(paramsArr.length).fill('?').join(', ')});`;
        preparedQueryString = mysql.format(queryString, [String(callName)]);
        return preparedQueryString;
    }
}