# Send email with Mailgun + Nodemailer

How to send emails with MailGun + Nodemailer

Prerequisite:
- Nodejs (Installed)


Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 1
Create a file named `.env`, and copy everything inside the `.env-example` file to the `.env` file. Inside the *.env* file, fill in the information with your email and password. 



#### Step 2
We need to define our nodemailer transporter to connect to our mailgun service. Make sure you fill `api_key` and `domain`.
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
Define a `mailOptions` variable. It should contains information that your receiver should know about it. Make sure you specify the template you'd like to send under the `template` property inside mailoptions object. Use the context to send extra data to your templates. 

```
let mailOptions = {
    from: 'abc@gmail.com', 
    to: 'cba@gmail.com',
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};
```


#### Step 5
In order to send an email with nodemailer, we need to bring the transporter that we previously configured above, and invoke the `sendMail` function. If everything goes well, you should receive an email.
```
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});

```



Once you have successfully completed the above steps. Run `npm start` to send an email