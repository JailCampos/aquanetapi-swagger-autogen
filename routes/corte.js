const express = require('express');
const router = express.Router();

// arreglo de boletas
const cortes = [
  {IN_ID_CORTXMAN: '1', DT_FECHA: "2022-12-21T00:00:00.000Z", VC_DISTRITO: 'Cañete', VC_PROVINCIA: 'Cañete', VC_DEPARTAMENTO: 'Lima', VC_COMENTARIO:'Hay una fuga de agua'},
  {IN_ID_CORTXMAN: '2', DT_FECHA: "2022-12-22T00:00:00.000Z", VC_DISTRITO: 'Bellavista', VC_PROVINCIA: 'Bellavista', VC_DEPARTAMENTO: 'Callao', VC_COMENTARIO:'No hay servicio de agua'},
  {IN_ID_CORTXMAN: '3', DT_FECHA: "2022-11-27T00:00:00.000Z", VC_DISTRITO: 'Lima', VC_PROVINCIA: 'Barranca', VC_DEPARTAMENTO: 'Lima', VC_COMENTARIO:'Hay una fuga de agua'},
];

router.get('/cortes', (req, res) => {
  /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedCorteArray"                             
              }
            }
          }
      }
  */
  res.send(cortes);
});

router.get('/cortes/:id', (req, res) => {
  const corte = cortes.find(c => c.IN_ID_CORTXMAN === req.params.id);
  /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/Corte"
              }
            }
          }
      }
  */
  if (!corte) return res.status(404).send('Corte no encontrado');
  else res.send(corte);
});

router.post('/cortes', (req, res) => {
  const corte = {
    IN_ID_CORTXMAN: (Math.floor(100000 + Math.random() * 900000)).toString(),
    DT_FECHA: "2022-12-22T00:00:00.000Z",
    VC_DISTRITO: "Comas",
    VC_PROVINCIA: "Comas",
    VC_DEPARTAMENTO: "Lima",
    VC_COMENTARIO: req.body.producto
  }
  /* #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Corte"
            }
          }
        }
      }

     #swagger.responses[200] = {
        description: "Operacion exitosa",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Corte"
            }
          }
        }
      }
  */

  bills.push(corte);
  res.send(corte);
})

module.exports = router;