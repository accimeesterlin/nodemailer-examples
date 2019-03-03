/*
    Video: https://www.youtube.com/watch?v=9zEhGUIUwxY
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account 
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'abc@gmail.com', // TODO: email sender
    to: 'cba@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    attachments: [
        { filename: 'images/profile.JPG', path: './images/profile.JPG' } // TODO: replace it with your own image
    ]
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});