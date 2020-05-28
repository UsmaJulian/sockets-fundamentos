var socket = io();
//ESCUCHAR SUCESOS
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('diconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});
//ENVIAR INFORMACION AL SERVIDOR
socket.emit('enviarMensaje', {
    usuario: 'Julian Usma',
    mensaje: 'Envio desde el cliente al servidor'
}, function(resp) {
    console.log('respuesta servidor: ', resp);
});
//ESCUCHAR INFORMACIÓN
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});