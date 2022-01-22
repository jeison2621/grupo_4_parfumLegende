const fs = require('fs');
const path = require('path');
let archivoUsuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/users_model.json')));

module.exports = (req, res, next) => {
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if (req.session.usuario) {
        res.locals.usuario = req.session.usuario;
        return next();
    } else if (req.cookies.email) {
        let usuario = archivoUsuarios.find(usuario => usuario.email == req.cookies.email);

        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    } else {
        return next();
    }
}