const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log(error)
)

app.use(bodyParser.json())

PORT = 3001;

app.listen(PORT, () => console.log(`listening on ${PORT}`)
)
