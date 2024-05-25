import { createServer } from "http";

import config from "config";
const PORT = config.get("PORT");

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Jim",
  },
];

//TODO: logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//TODO: json mw
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//TODO: route hander for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//TODO:  route hander for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  // console.log("Requested user id:", id);
  const user = users.find((user) => user.id === parseInt(id));
  // console.log("Got user by id:", user);

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found error! ! !" }));
  }
  res.end();
};

//TODO: route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  //listen to data event
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    console.log("json newUser:", newUser);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

//TODO: Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found error! ! !" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.method === "GET" && req.url === "/api/users") {
        getUsersHandler(req, res);
      } else if (
        req.method === "GET" &&
        req.url.match(/\/api\/users\/([0-9]+)/)
      ) {
        getUserByIdHandler(req, res);
      } else if (req.method === "POST" && req.url === "/api/users") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Node http Server3 is running on port ${PORT}`);
});
