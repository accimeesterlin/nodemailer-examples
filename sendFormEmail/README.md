# Submit a form, and receive email - Express + Nodejs + Nodemailer + MailGun

How to submit a form to a server, and then send an email

Prerequisite:
- Nodejs (Installed)


Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 1
Create a file named `.env`, and copy everything inside the `.env-example` file to the `.env` file. Inside the *.env* file, fill in the information with your email and password. 



#### Step 2
Navigate to the `mail.js` file. We need to define our nodemailer transporter to connect to our mailgun service. Make sure you fill `api_key` and `domain`.
```
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
```


#### Step 3
In order to obtain the `apiKey` and `domain`. Navigate to [MailGun](https://mailgun.com). Create an account if you don't have one, scroll all the way down in the dashboard page, you should see your `Private Api Key` below. 

![MailGun Screenshot](./public/images/apiKey_and_domain.png)



#### Step 4
In order to send an email, we can bring our `sendMail` function from `mail.js` file, and use it as below. If everything goes well, you should receive an email.
```
const sendMail = require('./mail');

sendMail(email, subject, text, function(err, data) {
    if (err) {
        return console.log('Error occurs);
    }
    return console.log('Message sent!!!');
});

```



Once you have successfully completed the above steps. Run `npm start` to send an email