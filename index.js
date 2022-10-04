import express from 'express';
import { sendSMS }  from './enviarsms.js'
const app = express();

app.use(express.json())


app.post('/enviarSMS', (req, res) => {
    let { to, from, body } = req.body;
    let respuesta = sendSMS(to, from, body);
    res.send(respuesta);
})

// app.post('/validarCompra', async (req, res) => {
//     let { to, from } = req.body;
//     // valide compra
//     let respuesta = 'Compra validada para articulo 20987';
//     let response = await sendSMS(to, from, respuesta)
//     res.send(response)
// })

const PORT = '8080';
const server = app.listen(PORT, () => {
    console.log(`Server listen on port: ${server.address().port} `)
})

server.on('error', error => console.log(error))