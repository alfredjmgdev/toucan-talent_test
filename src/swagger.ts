const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = process.env.URL_HOST || 'http://localhost/';

const swaggerDefinition = {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "Toucan Talent Test",
        description: "Toucan Talent Backend Test."
    },
    schemes: ["http"],
    servers: [
        {
            "url": `${HOST}:${PORT}`
        }
    ],
    basePath: "",
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: [path.join(__dirname, '/docs/**/*.yaml')]
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);