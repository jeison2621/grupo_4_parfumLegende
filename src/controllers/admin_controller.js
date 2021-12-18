const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        res.render(path.resolve(__dirname, '../views/admin/administrar'), {perfumes});
    },
    create: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'));
    },
    save: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        let ultimoPerfume = motos.pop();
        motos.push(ultimoPerfume);
        console.log();
        let nuevoProducto = {
            id: ultimoPerfume.id +1,
            nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        perfumes.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(perfumes,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../model/products:model.json'), nuevoProductoGuardar);
        res.redirect('/administrar');
    },
    show: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        let miPerfume;
        motos.forEach(perfume => {
            if(perfume.id == req.params.id){
                miPerfume = perfume;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail'), {miPerfume})

    },
    edit: (req,res)=>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        const modoId = req.params.id;
        let perfumeEditar = perfumes.find(perfume=> perfume.id == modoId);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {perfumeEditar});
    },
    update: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let perfumesUpdate = perfumes.map(perfume =>{
            if(perfume.id == req.body.id){
                return perfume = req.body;
            }
            return perfume;
        })
        let perfumeActualizar = JSON.stringify(perfumesUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../model/products_model.json'),perfumeActualizar)
        res.redirect('/administrar');
    },
    destroy: (req,res) =>{
        let perfumes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products_model.json')));
        const perfumeDeleteId = req.params.id;
        const perfumesFinal = perfumes.filter(perfume => perfume.id != perfumeDeleteId);
        let perfumesGuardar = JSON.stringify(perfumesFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../model/products_model.json'),perfumesGuardar);
        res.redirect('/administrar');
    }
}