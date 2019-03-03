/*
    Video: https://www.youtube.com/watch?v=i62jmLC15qQ
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

// Step 1
const auth = {
    auth: {
        api_key: process.env.API_KEY || 'mailgun_api_key', // TODO: 
        domain: process.env.DOMAIN || 'mailgun_domain' // TODO:
    }
};

// Step 2
let transporter = nodemailer.createTransport( mailGun(auth) );


// Step 3
let mailOptions = {
    from: 'abc@gmail.com', // TODO: email sender
    to: 'cba@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});