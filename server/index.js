/* eslint-disable no-console */

import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

let page;
if (process.env.NODE_ENV === 'production') {
  page = require('./page.generated');
} else {
  page = require('./page');
}

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  page(req, res);
});

console.log(`listening on port ${PORT}`);
app.listen(PORT);
