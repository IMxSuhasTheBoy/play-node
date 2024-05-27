import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

function greetHandler(year) {
  console.log(`Hello ${year}`);
}
function byeHandler(year) {
  console.log(`Bye ${year}`);
}

eventEmitter.on("greet", greetHandler);
eventEmitter.on("bye", byeHandler);

eventEmitter.emit("bye", "2024");
eventEmitter.emit("greet", "2025");

//TODO: error handler
eventEmitter.on("error", (err) => {
  console.log("⚠n Error Occured:", err);
});

//TODO: simulate error
eventEmitter.emit("error", new Error("Simulated : something went wrong error"));

