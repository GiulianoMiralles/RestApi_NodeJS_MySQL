const express = require('express');
const app = express();
const morgan = require('morgan');
// const bodyParser = require('body-parser'); ya no hace falta lo reemplazo app.use(express.json());


//Settings
app.set('port', process.env.PORT || 3000); //Si la nube me esta dando un puerto lo tomo sino le asigno yo el 3000

//Middlewares
app.use(express.json());
app.use(morgan('dev'));  

//Routes
app.use(require('./routes/employees'));



//Starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});
