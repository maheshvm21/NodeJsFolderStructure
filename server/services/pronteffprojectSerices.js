// `pf_v1_user_registration_status`(IN Name varchar(255),IN Email varchar(255),IN Email varchar(255))

// const { request } = require('http');
const util = require('./utils/util')
const db = require('./utils/dbWapper')
// console.log(db)
function Services() {
    this.userInsert = async function (request) {
        let responseData = [],
            error = true;
        let paramsArr = new Array(
            request.Email,
            request.Name,
            request.Password
        );
        let queryString = util.getQueryString('pf_v1_user_registration_status', paramsArr);
        if (queryString != '') {
            await db.executeQueryPromise(queryString, request)
                .then(async (data) => {
                    responseData = request;
                    error = false;
                })
                .catch((err) => {
                    error = err;
                })
        }
        return [error, responseData];
    };
    this.getSingleUsers = async function (request) {
        let responseData,
            error = true;
        let paramsArr = new Array(
            request.id
        );
        console.log(paramsArr, 'para');
        let queryString = util.getQueryString('pf_v1_get_single_user', paramsArr);
        console.log(queryString)
        if (queryString != '') {
            await db.executeQueryPromise(queryString, request)
                .then(async (data) => {
                    responseData = data;
                    console.log(data)
                    error = false;
                })
                .catch((err) => {
                    error = err;
                    console.log(error);
                })
        }
        return [error, responseData];
    };
    this.deleteSingleUser = async function (request) {
        let responseData = [],
            error = true;
        let paramsArr = new Array(
            request.id
        );
        console.log(paramsArr, 'para');
        let queryString = util.getQueryString('pf_v1_delete_user_id', paramsArr);
        console.log(queryString)
        if (queryString != '') {
            await db.executeQueryPromise(queryString, request)
                .then(async (data) => {
                    responseData = data;
                    error = false;
                })
                .catch((err) => {
                    error = err;
                    console.log(error);
                })
        }
        return [error, responseData];
    };
    this.getallUsers = async function (request) {
        let responseData = [],
            error = true;
        let paramsArr = new Array(
            request.organization
        );
        // console.log(paramsArr,'para');
        let queryString = util.getQueryString('pf_v1_get_all_user_from_prontef', []);
        console.log(queryString)
        if (queryString != '') {
            await db.executeQueryPromise(queryString, request)
                .then(async (data) => {
                    responseData = data;
                    error = false;
                })
                .catch((err) => {
                    error = err;
                    console.log(error);
                })
        }
        return [error, responseData];
    };
}
module.exports = Services; 