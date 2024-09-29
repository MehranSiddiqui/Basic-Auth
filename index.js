import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const finalRoute = `${__dirname}/public/`;
const storedEmail = "mehranb0728@gmail.com";
const storedPassword = "Nnamb786*";
let routeTo = "";
const checkData = (req, res, next) => {
  if (
    req?.body?.email === storedEmail &&
    req?.body?.password === storedPassword
  ) {
    routeTo = "secrets.html";
  } else {
    routeTo = "error.html";
  }
  next();
};
app.use(checkData);
app.get("/", (req, res) => {
  res.sendFile(`${finalRoute}index.html`);
});

app.post("/check", (req, res) => {
  res.sendFile(`${finalRoute}${routeTo}`);
});
app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));
