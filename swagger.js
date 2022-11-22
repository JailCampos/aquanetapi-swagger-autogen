const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/corte.js"];

const doc = {
  info: {
    title: 'Aquanet API',
    description: 'Proyecto Aquanet API',
  },
  servers: [
    {
      url: "https://restapi-aquanet-production.up.railway.app/api/"
    }
  ],
  components: {
    "@schemas": {
      Corte: {
        type: "object",
        properties: {
            IN_ID_CORTXMAN: {
            type: "string",
            description: "identificador del corte",
            example: "1"
          },
          DT_FECHA: {
            type: "string",
            description: "fecha de corte",
            example: "2022-12-21T00:00:00.000Z"
          },
          VC_DISTRITO: {
            type: "string",
            description: "el distrito",
            example: "Cañete"
          },
          VC_PROVINCIA: {
            type: "string",
            description: "la provincia",
            example: "Cañete"
          },
          VC_DEPARTAMENTO: {
            type: "string",
            description: "el departamento",
            example: "Lima"
          },
          VC_COMENTARIO: {
            type: "string",
            description: "colocar la queja",
            example: "hay una fuga de agua"
          }          
        },
        example: {
            IN_ID_CORTXMAN: 1,
            DT_FECHA: "2022-12-21T00:00:00.000Z",
            VC_DISTRITO: "Cañete",
            VC_PROVINCIA: "Cañete",
            VC_DEPARTAMENTO: "Lima",
            VC_COMENTARIO: "Hay una fuga de agua"    
        }
      }
    }
  },
  definitions: {
    myReferencedBillArray: [{ $ref: "#/definitions/Corte" }]
  }
};

swaggerAutogen(outputFile, endpointsFiles, doc);