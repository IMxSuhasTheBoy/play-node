import http from "http";
const PORT = 8000;

const server = http.createServer((req, res) => {
  /** // res.setHeader("Content-Type", "text/plain");
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
 */

  res.writeHead(500, { "Content-Type": "application/json" });
  res.write("Hello World ");
  // res.end('<h1>"Hello World "</h1>');
  res.end(JSON.stringify({ message: "Server error! ! !" }));
});

server.listen(PORT || 8001, () => {
  console.log(`Node http Server is running on port ${PORT}`);
});
