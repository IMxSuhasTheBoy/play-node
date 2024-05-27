import crypto from "crypto";

//createHash()
const hash = crypto.createHash("sha256");
hash.update("IMxSuhasTheBoy");
// console.log(hash.digest("hex"));

//randomBytes()
// crypto.randomBytes(4, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString("hex"));
// });

//createCipheriv & createDecipheriv
const algo = "aes-256-ctr";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algo, key, iv);
let encrypted = cipher.update("IMxSuhasTheBoy", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algo, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
