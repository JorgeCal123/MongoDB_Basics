

// Retorna un objeto tipo cursor (extrae solo 20 dodumentos)

db.users.find()

//Si se quiere ver los demas presionamos

it


// find, sort, limit, skip -> retorna cursores

// count, pretty


// saber la cantidad de documentos que tiene una colleccion
db.users.find().count()


// Nos permite limitar la cantidad de documentos que quiero ver
db.users.find().limit()

//Nos permite saltar los primeros x documentos, en este caso 5
db.users.find().skip(5);


//Ordenar los documentos ya sea de mayor o menor edad

//mayor a menor
db.users.find().sort( {'age': -1})
//menor a mayor
db.users.find().sort( {'age': 1})


// imprimir los documentos en formato json
db.users.find().pretty()
