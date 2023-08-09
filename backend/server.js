const express = require('express'); 
const routes = require('./routes'); 
const cors = require('cors'); 
const path = require('path'); 


const bodyParser = require("body-parser") 

const sequelize = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build'))); 
  app.use(cors({
    origin: 'https://apex-smoothies.herokuapp.com/'
  }));
} else {
  app.use(cors({
    origin: 'http://localhost:3000'
  }));
} 



app.use(express.urlencoded({ extended: true }));
app.use(express.json());  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});