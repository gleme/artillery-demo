const {generateId} = require('./utils');


function generateUserRef(requestParams, context, ee, next) {
    const userRef = generateId(30);
    requestParams.form['user_ref'] = userRef;
    return next();
}

function logResponse(requestParams, response, context, ee, next) {
    console.log('response', response);
    return next();
}

module.exports = {
    generateUserRef,
    logResponse
};

