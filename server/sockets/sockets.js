const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario Conectado');
    client.emit('enviarMensaje', {
        Usuario: 'Administardor',
        mensaje: 'Bienvenido'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //ESCUCHAR LO QUE ENVIA EL CLIENTE
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo se envio correctamente!'
        //     });
        // } else {
        //     callback({
        //         resp: 'no se envio nada'
        //     })
        // }
        //BROADCAST ENVIA A TODOS LOS USUARIOS CONECTADOS EN EL SERVIDOR
        client.broadcast.emit('enviarMensaje', data);
    });

});