const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors");

//require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to my form')
});

app.post('/api/form', (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "inlangoemail@gmail.com",
            pass: "9841515319@Qwe"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'admin@inlango.com',
        subject: `Message from ${data.firstName}`,
        html: `
        <h3>Informations</h3>
        <ul>
            <li>Name: ${data.firstName}</li>
            <li>Lastname: ${data.lastName}</li>
            <li>Email: ${data.email}</li>
        </ul>
    
        <h3>Message</h3>
        <p>${data.message}</p>
        
        `
    }
    smtpTransport.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
    smtpTransport.sendMail(mailOptions, (error, response) => {

        if (error) {
            res.send(error);
        }
        else {
            res.send('Success');
            console.log('success');
        }

    })

    smtpTransport.close();
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});