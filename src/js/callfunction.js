module.exports.callFunc = () => {
    const mailer = require('./send_SES_email')
    mailer.sendMail()
}