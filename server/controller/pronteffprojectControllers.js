var projectService = require('../services/pronteffprojectSerices');

function Controller(objCollection) {

    var app = objCollection.app;
    var Services = new projectService(objCollection);
    var responseWrapper = objCollection.responseWrapper;
    app.post('/' + global.config.version + '/pam/get/Analytic/report', async function (req, res) {
        let [err, result] = await Services.userInsert(req.body)
        if (!err) {
            res.json(responseWrapper.getResponse({}, result, 200, req.body));
        } else {
            console.log("/pam/get/Analytic/report | Error: ", err);
            res.json(responseWrapper.getResponse(true, result, -9999, req.body));
        }
    });
    app.post('/' + global.config.version + '/get/single/user', async function (req, res) {
        let [err, result] = await Services.getSingleUsers(req.body)
        if (!err) {
            res.json(responseWrapper.getResponse({}, result, 200, req.body));
        } else {
            console.log("/get/all/users | Error: ", err);
            res.json(responseWrapper.getResponse(true, result, -9999, req.body));
        }
    });
    
    
    app.get('/' + global.config.version + '/pam/get/all/users', async function (req, res) {
        let [err, result] = await Services.getallUsers(req.body)
        if (!err) {
            res.json(responseWrapper.getResponse({}, result, 200, req.body));
        } else {
            console.log("/get/all/users | Error: ", err);
            res.json(responseWrapper.getResponse(true, result, -9999, req.body));
        }
    });
    app.post('/' + global.config.version + '/delete/single/users', async function (req, res) {
        let [err, result] = await Services.deleteSingleUser(req.body)
        if (!err) {
            res.json(responseWrapper.getResponse({}, result, 200, req.body));
        } else {
            console.log("/get/all/users | Error: ", err);
            res.json(responseWrapper.getResponse(true, result, -9999, req.body));
        }
    });
}

module.exports = Controller;
