// import fs from "fs";
import fs from "fs/promises";

//TODO: readFile(file, options, callback) : async
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//TODO: readFileSync() : sync
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

//TODO: readFile() : promise .then()
// fs.readFile("test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//TODO: readFile(): async/await
const readFileData = async () => {
  try {
    const data = await fs.readFile("test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
// readFileData();

//TODO: writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile("test.txt", "Hello nodejs");
  } catch (err) {
    console.log(err);
  }
};
// writeFile();
// readFileData();

//TODO: appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("test.txt", "Welcome to js script files");
  } catch (err) {
    console.log(err);
  }
};

// writeFile()
appendFile();
readFileData();
