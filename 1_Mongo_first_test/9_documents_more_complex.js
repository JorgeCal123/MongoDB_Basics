
user15 ={
    'username': 'user15',
    'age': 27,
    'email': 'u15@live.com',
    'status': 'active',
    'address': {
        'zip': 1001,
        'country': 'MX'
    },
    'courses': ['python', 'mongodb', 'Ruby', 'Java'],
    'comments':[
        {
            body:'Best course',
            like: true,
            tags: ['mongodb']
        },
        {
            body:'Super excited',
            like: true,
        },
        {
            body:'The course is ok',
        },
        {
            body:'Bad course',
            like: false,
            tags: ['bad', 'coures', 'mongodb']
        }
    ] 
}

user16 = {
    'username': 'user16',
    'age': 29,
    'email': 'u16@live.com',
    'status': 'active',
    'comments':[
        {
            body:'Best course',
            like: true,
        },
    ]
} 


user17 = {
    'username': 'user17',
    'age': 29,
    'email': 'u16@live.com',
    'status': 'active',
    'comments':[
        {
            body:'Best course',
            like: false,
        },
    ]
}

db.users.insertMany(
    [user15, user16, user17]
)



// obtener todos lus usuarios que radiquen en mexico

db.users.find(
    {'address.country': 'MX'}
)

// obtener todos lus usuarios que radiquen en mexico y mostrar solo 
// lo datos de su nombre y el pais

db.users.find(
    {'address.country': 'MX'},
    {
        username: true,
        'address.country': true
    }
)


db.users.find(
    {'address.country': 'MX'}
)
// actualizar el codigo postal de todos los documentos
db.users.updateMany(
    {
            'address.zip': {$exists: true}
    },
    {
        $set: {
            'address.zip': 10
        }

    }
)

// darle el atributo de direccion a todos aquellos que no lo tengan
db.users.updateMany(
    {
            'address': {$exists: false}
    },
    {
        $set: {
            'address': {
                country: 'MX',
                zip: 2017
            }
        }
    }
)

// obtener todos los usuarios que tengan en su listado el curso de python

db.users.find(
    {courses: {$exists: true}}
)

/**
 * elemMatch        Nos permite filtrar sobre atributos de documentos sobre listados
 */


// obtener todos los usuarios con por lo menos un comentario positivo
// añadir un nuevo comentario positivo al listado de comenarios para el usuario 11
// añade una nueva etiqueta al 4 comentario del usuario 11
// actualiza el segundo comentario del usuario 11
// actualiza el comentario negatico del usuario 11