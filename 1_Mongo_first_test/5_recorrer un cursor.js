

// imprimir todos los nombres de usuarios 

db.users.find().forEach(element => print(element.username));