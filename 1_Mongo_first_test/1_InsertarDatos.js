// Crear un documento
// Documento -> objetos de tipo JSON

user1 = {
    'username': 'user1',
    'age': '27',
    'email': 'u1@gmail.com',

};

user2 = {
    'username': 'user2',
    'age': '29',
    'email': 'u2@gmail.com',

};

user3 = {
    'username': 'user3',
    'age': '29',
    'email': 'u3@gmail.com',

};

user4 = {
    'username': 'user4',
    'age': '80',
    'email': 'u4@gmail.com',

};

user5 = {
    'username': 'user5',
    'age': '78',
    'email': 'u5@gmail.com',

};

user6 = {
    'username': 'user6',
    'age': '23',
    'email': 'u6@gmail.com',

};

// una coleccion es donde vamos a almacenar los documentos bajo un contexto


// imgresar un documento a una collection
db.users.insert(user1);


// agregar un documento a la collection y muestra su id
db.users.insertOne(user3);

// agregar varios documentos a una collection
db.users.insertMany([user4, user5]);

// agrega un documento a colleccion pero
    //Si no existe, se crea
    //Si Existe, se actualiza
db.users.save(user6);

// ver los documentos que hay dentro de una colleccion
db.users.find();



db.users.insertMany([
    {
        'username': 'user7',
        'age': '48',
        'email': 'u7@gmail.com',
        'status': 'inactive',
    },
    {
        'username': 'user8',
        'age': '39',
        'email': 'u8@gmail.com',
        'status': 'inactive',
    },
    {
        'username': 'user9',
        'age': '23',
        'email': 'u9@gmail.com',
        'status': 'inactive',
    },
    {
        'username': 'user10',
        'age': '64',
        'email': 'u10@gmail.com',
        'status': 'active',
    }
]);

