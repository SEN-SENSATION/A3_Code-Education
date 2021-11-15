const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<style>body {background-color: #202020; color: white;}</style>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><h1>Welcome from node.js</h1><form action="/create-user" method="POST"><input type="text" name="message"> <button type="submit">GO!</button></form> </body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<ul><li>Saikaaa Was taken</li> <li>Sensation</li></ul>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const newUser = parsedbody.split("=")[1];
      console.log(newUser);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});

server.listen(3000, "127.0.0.1");
