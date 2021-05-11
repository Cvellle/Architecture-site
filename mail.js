const nodemailer = require("nodemailer");

const sendEmail = (reqArg) => {
  var transporter = nodemailer.createTransport({
    type: "SMTP",
    host: "smtp.gmail.com",
    auth: {
      user: "n.cuekisa@gmail.com",
      // OVDE SIFRU OD MEJLA KOJI JE ZADUZEN ZA SLANJE - MORA DA MU BUDE ODOBRENO "ALLOW 3rd PARTY APPLICATIONS U SETTINGS"
      pass: process.env.EMAIL_SEND_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: "cuekisa@yahoo.com",
    to: [
      { address: "cuekisa@yahoo.com" },
      { name: "Receiver", address: reqArg.body.email },
    ],
    subject: "Poruka od klijenta",
    html: `
      <body style="background: lightblue;>
        <h3 style="color:red"Poruka</h3> <br>
        <div style="background: rgb(65, 214, 252); padding: 3vw; font-weight: 500;">  
          <p style="color:black">Od: ${reqArg.body.name}</p><br> 
          <p style="color:black">Mail:  ${reqArg.body.email}</p><br> 
          <p style="color:black">Telefon:  ${reqArg.body.phone}</p><br> 
          <p style="color:black">Adresa: ${reqArg.body.address}</p><br> 
          <p style="color:black">Poruka: ${reqArg.body.message}</p> 
        </div>
        </body>
      <hr>
      `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log(reqArg.body);
};

module.exports = { sendEmail };
