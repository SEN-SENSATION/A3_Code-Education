const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<style>body {background-color: #202020; color: white;}</style>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">GO!</button></form> </body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chuck) => {
      console.log(chuck);
      body.push(chuck);
    });
    return req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody);
      const message = parsedbody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<style>body {background-color: #202020; color: white;}</style>");
  res.write("<head><title>Welcome To Node.Js</title></head>");
  res.write("<body><h1>Hello from my node.js server!</h1> </body>");
  res.write("</head>");
  res.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "Some text headed coded Here!",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some harded Coded Txt";

exports.handler = requestHandler;
exports.someText = "Some harded Coded Txt";
