// import { getPosts } from "./postController.js"; //import syntax for named exports
import getPosts, { getPostsLength } from "./postController.js"; //import syntax for default export module from postController.js also for regular named exports combined with default export module

console.log(getPosts());

console.log(`Get posts length: ${getPostsLength()}`);

/** import commonJS modules 
const {
  genRandomNumber,
  genRandomColor,
  celciusToFahrenheit,
} = require("./utils");

console.log(`Random number : ${genRandomNumber()}`);
console.log(`Random color : ${genRandomColor()}`);
console.log(`Celsius to fahrenheit : ${celciusToFahrenheit(44)}`);
*/
