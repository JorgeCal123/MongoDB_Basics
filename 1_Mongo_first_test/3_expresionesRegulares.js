
// EXPRESIONES REGULARES

// para encontrar 


//obtener todos los nombres de usuarios que terminen en 1

db.users.find({ 'username': /1$/ });

//obtener todos los correos de los usuarios que terminen en .net

db.users.find({ 'email': /.net$/ });


//Obtener todos los nombres de los usarios que empiecen por "user1"

db.users.find({'username':/^user1/})


//obtener todos los correos que contenga dentro del string "tm"

db.users.find({'email': /tm/});

