const express = require("express");
require("dotenv").config();
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const Note = require("../models/dataBase");
const nodemailer = require("nodemailer");
const user = process.env.SENDGRID_USER;
const pass = process.env.SENDGRID_PASSWORD;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(bodyParser.json());

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  // Answer API requests.
  app.get("/api", function(req, res) {
    res.set("Content-Type", "application/json");
    res.send('{"message":"YOOOOOOOOOOOOOOOOOOOOOOOOOOO!"}');
  });

  app.get("/api/notes", (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes.map(note => note.toJSON()));
      console.log(note);
    });
  });

  app.get("/api/notes/:naziv", (request, response) => {
    Note.find({ naziv: { $eq: request.params.naziv } }).then(note => {
      response.json(note);
    });
  });

  app.get("/api/notes/:id", (request, response) => {
    Note.find({ ID: { $eq: request.params.ID } }).then(note => {
      response.json(note);
    });
  });
  // All remaining requests return the React app, so it can handle routing.
  app.get("*", function(request, response) {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.post("/api/form", (req, res) => {
    async function main() {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: user, //  user
          pass: pass //  password
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `${req.body.email}`, // sender address
        to: "misko.199613@gmail.com", // list of receivers
        // subject: `${req.body.username}`, // Subject line
        text: `broj:${req.body.phoneNumber}`, // plain text body
        html: `<b>${req.body.naziv}, Ime:${req.body.username}, E-mail: ${req.body.email}</b>` // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }

    main().catch(console.error);
  });

  app.listen(PORT, function() {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}
