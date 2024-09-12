const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Farmer application API',
            version: '1.0.0',
            description: 'API documentation for avocado society api',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Development server',
            },
            {
                url: 'https://applicanion-api.onrender.com/api',
                description: 'Production server',
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1
                        },
                        firstname: {
                            type: 'string',
                            example: 'John'
                        },
                        lastname: {
                            type: 'string',
                            example: 'Doe'
                        },
                        telephone: {
                            type: 'string',
                            example: '1234567890'
                        },
                        idnumber: {
                            type: 'string',
                            example: 'A12345678'
                        },
                        village: {
                            type: 'string',
                            example: 'Village Name'
                        },
                        cell: {
                            type: 'string',
                            example: 'Cell Name'
                        },
                        sector: {
                            type: 'string',
                            example: 'Sector Name'
                        },
                        district: {
                            type: 'string',
                            example: 'District Name'
                        },
                        province: {
                            type: 'string',
                            example: 'Province Name'
                        },
                        planted: {
                            type: 'string',
                            example: '2023-01-01'
                        },
                        avocadotype: {
                            type: 'string',
                            example: 'Hass'
                        },
                        mixedpercentage: {
                            type: 'string',
                            example: '50%'
                        },
                        farmsize: {
                            type: 'string',
                            example: '10 acres'
                        },
                        treecount: {
                            type: 'integer',
                            example: 100
                        },
                        upinumber: {
                            type: 'string',
                            example: 'UPI123456'
                        },
                        assistance: {
                            type: 'string',
                            example: 'Yes'
                        }
                    }
                }
            }
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/models/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };