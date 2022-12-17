// konsep mvc
require('dotenv').config(); // menyimpan configurasi
const express = require('express');
const cors = require('cors'); // membatasi akses ke API

const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');

// buat route

const userRouter = require('./src/router/user.routes');
const recipeRouter = require('./src/router/recipe.routes');
const comment = require('./src/router/comment.routes');
const authRouter = require('./src/router/auth.routes');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(helmet());
app.use(bodyParser.json());

app.use(cors());
app.use(userRouter);
app.use(recipeRouter);
app.use(comment);
app.use(authRouter);
app.use(xss);

// try {
//   app.use(helmet());
//   app.use(bodyParser.json());
//   app.use(xss());
//   app.use(cors());
//   app.use(cookieparser());
// } catch (err) {
//   console.log(err);
// }
// app.use(userRouter);
// app.use(recipeRouter);
// // app.use(comment);
// // aap.use(authRouter);

// jalankan express
app.listen(process.env.PORT, () => {
  console.log('SERVICE RUNNING ON PORT 5000');
});
