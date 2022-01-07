var Controller = require('../controller/pronteffprojectControllers')

function ControlInterceptor(objCollection) {
    new Controller(objCollection);
}

module.exports = ControlInterceptor;