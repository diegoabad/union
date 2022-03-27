const {server} = require('./app');

require('dotenv').config();

//Me conecto a la base de datos

    server.listen(process.env.PORT, () => {
        console.log(`Listening in ${process.env.PORT}`) 
    });
