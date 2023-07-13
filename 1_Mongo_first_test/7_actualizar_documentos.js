


//   -------------------   SAVE    -----------------------

// actualizar el usuario user3, cmabiar el nombre y el correo

var getUser = db.users.findOne(
    { username : 'user3'}
);

getUser.username = "Juan Carlos";
getUser.email = "juanCar22@hotmail.com";

db.users.save(getUser);


//  ---------------------   UPDATE  -------------------------

// actualizar el usuario user9, cambiar el nombre el correo, y añadir
// numero de telefono 


db.users.update(
    {
        "_id" : ObjectId("64ab28e9db57b08b00cc9fef")
    },
    { 
        $set : {
            username : 'Coby',
            email : 'coby32@hotmail.net',
            celular: "312 897 99 87"
        }
        }

);


// actualizar a todos los usuarion con estatus activo

db.users.update(
    {
        status: 'inactive'
    },
    { 
        $set : {
            status: 'active'

        }
    },
    {
        multi: true
    }

);


// eliminar el atributo email del usuario coby

db.users.update(
    {
        "_id" : ObjectId("64ab28e9db57b08b00cc9fef")
    },
    { 
        $unset : {
            email : true
        }
        }

);


// modifica el status del primer dato que encuentre con el nombre user10
db.users.updateOne(
    {
        username : 'user10',
    },
    { 
        $set : {
            status: 'inactive'
        }
        }

);

// agregar el atributo biografia a todos los usuarios que tengan el status active 

db.users.updateMany(
    {
        status : {$exists : true},
    },
    { 
        $set : {
            biography: ' '
        }
        }

);


// incrementtar una año a todos los usuarios

db.users.updateMany(
    {
    },
    { 
        $inc : {
            age: 1
        }
        }

);