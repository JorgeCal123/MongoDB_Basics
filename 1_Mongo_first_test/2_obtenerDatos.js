// Obtener el usuario con username user/

    //retorna un cursor
db.users.find({
    'username': 'user7'
});

    //retorna un documento
db.users.findOne({
    'username': 'user7'
});

//operadores relacionales

// gt       Mayor que
// gte      mayor igual que
// lt       menor que
// lte      menor igual que

// ne       not equals


// operadores Logicos

// and
// or


// in       permite buscar sobre un listado



// ----------------      ejercicios      ---------------------
// Obtener todos los usuarios con edad mayor a 10

db.users.find({
    'age': { $gt: '10' }
});

// Obtener la contidad de usuarios con una edad menor a 50

    /**
     * aqui encuentra los que usuarios pero necesito la cantidad
     * y como es de tipo cursor, este tiene un metodo caunt()
     */
db.users.find({
    'age': { $lt: '50' }
}).count();

// Obtener todos los usuarios con una edad mayor a 10 y cuyo estatus sea activo

db.users.find({
    $and: [
        {'age': {$gt: '10'}},
        {'status': 'active'}
    ]
});

// Obtener todos los usuarios cuya edad no sea 11

db.users.find({
    'age': { $ne: '11' }
})
// Obtener todos los usuarios que tengan por edad 27 o 48 o 11

db.users.find({
    $or : [
        {'age': '27'},
        {'age': '48'},
        {'age': '11'},
    ]
})

/**
 *  Existe una segunda opcion que me permite buscar dentro de forma
 *  mas facil
 */

db.users.find({
    age: { $in: ['27','48','11']}
});

// Obtener todos los usuarios con atributo status

db.users.find({
    status: { $exists: true}
})

// Obtener todos los usuarios con status activo 
db.users.find({
    $and: [
        { status: { $exists: true } },
        { status: 'active'}
    ]
})

// Obtener todos los usuarios con status activo  y correo electronico

db.users.find({
    $and: [
        {'status': 'active' },
        {'email': {$exists: true}}
    ]
})
// Obtener el usuario con mayor edad

/**
 * Se ordenan de forma descendente
 */
db.users.find().sort(
    { age: -1 }
).limit(1);
// Obtener a los 3 usuarios mas jovenes

db.users.find().sort({
    age: 1
}).limit(3)