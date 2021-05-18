const pool = require('../data/config');

const router = app => {
    app.get('/',request,response => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });

    //***** Ruta App Manejo de usuarios *****
    
    //mostrar todos los usuarios
    app.get('/users',(request,response) => {
        pool.query('SELECT * FROM users', (error,result) => {
            if(error) throw error;
    
            response.send(result);
        });
    });

    //Mostrar usuarios por ID
    app.get('/users/:id',(request,response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM users', (error,result) => {
            if(error) throw error;

            response.send(result);
        });
    });

    //Insertar un nuevo usuario
    app.post('/users', (request,response) => {
        pool.query('INSERT INTO users SET ?',request.body,(error,result) => {
            if(error) throw error;

            response.status(201).send('Usuario añadido con el ID: ${result.insertId}');
        });
    });

    //Actualizar datos del usuario
    app.put('/users/:id',(request,response) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?',[request.body, id], (error,result) => {
            if(error) throw error;

            response.send('Usuario agregado correctamente');
        });
    });

    //Eliminar un usuario
    app.delete('/users/:id',(request,response) => {
        const id = request.params.id;

        pool.query('DELETE FROM users WHERE id = ?', (error,result) => {
            if(error) throw error;

            response.send('Usuario eliminado');
        });
    });

    //*****Ruta app manejo de Escuelas *****

    //mostrar todas las escuelas
    app.get('/escuelas',(request,response) => {
        pool.query('SELECT * FROM escuelas', (error,result) => {
            if(error) throw error;
    
            response.send(result);
        });
    });

    //Mostrar escuelas por ID
    app.get('/escuelas/:id',(request,response) => {
        const id = request.params.id;

        pool.query('SELECT * FROM escuelas', (error,result) => {
            if(error) throw error;

            response.send(result);
        });
    });

    //Insertar una nueva escuela
    app.post('/escuelas', (request,response) => {
        pool.query('INSERT INTO escuelas SET ?',request.body,(error,result) => {
            if(error) throw error;

            response.status(201).send('Escuela añadida con el ID: ${result.insertId}');
        });
    });
}


module.exports =router;