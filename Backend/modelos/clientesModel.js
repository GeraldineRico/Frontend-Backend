var clientesModel = {

}

clientesModel.guardar = function (informacion,callback) {

    datos.push(
        {
            cedula: informacion.cedula,
            nombre: informacion.nombre,
            apellido: informacion.apellido,
            direccion: informacion.direccion,
            telefono: informacion.telefono,
            edad: informacion.edad,
            estadoCivil: informacion.estadoCivil
        })
        return callback({ state: true, mensaje: "Usuario guardado" })


}

clientesModel.listarClientes = function(informacion,callback){
    return callback({ state: true, dato: datos })
}

clientesModel.actualizar = function(informacion,callback){
    datos[informacion.posicion].edad = informacion.edad
    datos[informacion.posicion].nombre = informacion.nombre
    datos[informacion.posicion].apellido = informacion.apellido
    datos[informacion.posicion].direccion = informacion.direccion
    datos[informacion.posicion].telefono = informacion.telefono
    datos[informacion.posicion].edad = informacion.edad
    datos[informacion.posicion].estadoCivil = informacion.estadoCivil

    return callback({ state: true, mensaje: "Se actualizaron los datos correctamente" })
}

clientesModel.borrar = function(posicion,callback){
    datos.splice(posicion, 1)
    return callback({ state: true, mensaje: "Se eliminó correctamente" })
}

module.exports.modelo = clientesModel