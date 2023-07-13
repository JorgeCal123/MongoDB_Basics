
//Elimina todos los documentos
db.users.remove({});


// Eliminar a todos los usuarios que tengan el estado inactivo
db.users.remove({
    status: 'inactive'
})

// eliminar por el id
db.users.remove({
    "_id" : ObjectId("64aca0228d203ccda78adc40")
})


// eliminar una colleccion

db.users.drop()


// eliminar una base de datos

db.dropDatabase();