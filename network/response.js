/**
 * Modulo para respuestas del servidor
 */

exports.success = (req, res, message, status) => {
    // Respuesta si todo sale bien
    res.status(status || 200).send({
        "error": "",
        "body":message,
    });
}

exports.error = (req, res, message, status, details) => {
    //Respuesta si algo sale mal
    console.error(`[Response error] : ${details}`);
    res.status(status || 500).send({
        "error": message,
        "body": ''
    })
}