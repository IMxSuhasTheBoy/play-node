import http from "http";
import fs from "fs/promises";
import config from "config";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const PORT = config.get("PORT");

const server = http.createServer((req, res) => {
  //*simple routes
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1>"server2 Home page"</h1>');
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1>"server2 About page"</h1>');
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end('<h1>"server2 404 page"</h1>');
      }
    } else {
      throw new Error("Invalid request! ! !");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server error! ! !");
  }
});

server.listen(PORT || 8001, () => {
  console.log(`Node http Server2 is running on port ${PORT}`);
});
