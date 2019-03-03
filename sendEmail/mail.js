
// Chunk 3
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: 'key-738cb12ebb302b27a019583046d58f11',
        domain: 'sandbox8f6efb94fb694079a979f3640bcd4520.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


// Chunk 4
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'deltamavericks@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;
