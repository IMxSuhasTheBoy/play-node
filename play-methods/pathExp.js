import path from "path";

const filePath = "./dir1/di2/test.txt";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const filePath2 = path.join(__dirname, "dir1", "di2", "test.txt");
console.log(filePath2);

const filePath3 = path.resolve(__dirname, "dir1", "di2", "test.txt");
console.log(filePath3);
