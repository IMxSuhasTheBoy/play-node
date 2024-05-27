import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObject = new URL(urlString);
console.log(urlObject);

console.log(url.format(urlObject));

const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get("q"));
params.append("limit", "10");
params.append("offset", "10");
params.delete("limit");
console.log(params);

console.log(import.meta.url);

console.log(url.fileURLToPath(import.meta.url));
