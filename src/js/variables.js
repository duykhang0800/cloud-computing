var CcAddresses = 'afc.luan2508@gmail.com';
var toAddresses = 'alucard310800@gmail.com';
var sourceAddresses = 's3777351@rmit.edu.vn';
var ReplyToAddresses = 'phongchan99@gmail.com';

exports.configAWS = function () {
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.loadFromPath("../config.json")
    return AWS;
}

exports.getCCAdd = function() {
    return CcAddresses;
}

exports.getToAdd = function() {
    return toAddresses;
}

exports.getSourceAdd = function() {
    return sourceAddresses;
}

exports.getRepAdd = function() {
    return ReplyToAddresses;
}