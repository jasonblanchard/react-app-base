import 'babel/polyfill';
import express from 'express'
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';

import initialState from './fixtures/initialStateFixture';

let data = initialState;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {

  res.render('index', {initialState: JSON.stringify(data)});

});

app.listen('8080');
