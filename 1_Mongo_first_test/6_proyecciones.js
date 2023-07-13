

// Se uiliza principalmente cuando se quiere seleccionar algunas
// columnas en especifico pra mostrar

db.users.find(
    {}, // se definen las condiciones
    {
    _id: false,
    username: true,
    email: true,
    }
)

db.users.find(
    {
        age: {$gte: '50'}
    },
    {
    _id: false,
    username: true,
    email: true,
    }
)

