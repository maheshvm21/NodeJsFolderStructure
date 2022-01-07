const util=require('./util')
function ResponseWrapper() {

    this.getResponse = function (err, data, statusCode, request) {
        var response = {
            status: statusCode,
            //description: responseCollection[statusCode],
            gmt_time: util.getCurrentUTCTime(),
            response: data
        };

        return response;
    };

}
;

module.exports = ResponseWrapper;