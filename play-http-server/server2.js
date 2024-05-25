import http from "http";
import fs from "fs/promises";
import config from "config";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const PORT = config.get("PORT");

const server = http.createServer(async (req, res) => {
  //*simple routes
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Page not found! ! !");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
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
