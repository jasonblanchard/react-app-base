/* eslint-disable no-console */
import env from '../env.json';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

let page;
if (process.env.NODE_ENV === 'production') {
  page = require('./page.compiled');
}

const config = env[process.env.NODE_ENV || 'development'];

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    page(req, res);
  } else {
    res.render('index', {
      markup: '',
      initialState: JSON.stringify({}),
      scriptSource: config.SCRIPT_SOURCE,
    });
  }
});

console.log(`listening on port ${PORT}`);
app.listen(PORT);
