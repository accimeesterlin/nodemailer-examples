

# Send email with Gmail - Nodemailer

How to send an email with your personal gmail account using Nodemailer

Prerequisite:
- Nodejs (Installed)


Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 1
Create a file named `.env`, and copy everything inside the `.env-example` file to the `.env` file. Inside the *.env* file, fill in the information with your email and password. 



#### Step 2
We need to define our nodemailer transporter to connect to our service. Make sure you fill in with your credentials such as `email` and `password`.
```
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', 
        pass: process.env.PASSWORD || '1234'
    }
});
```


#### Step 3
Define a `mailOptions` variable. It should contains information that your receiver should know about it. 
```
let mailOptions = {
    from: 'abc@gmail.com', 
    to: 'cba@gmail.com',
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};
```


#### Step 4
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