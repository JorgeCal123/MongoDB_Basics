import pymongo
from pprint import pprint

from bson.objectid import ObjectId

MONGO_HOST = "localhost";
MONGO_PUERTO = "27017";
MONGO_TIME_OUT = 1000;

MONGO_URI = "mongodb://" + MONGO_HOST+ ":" + MONGO_PUERTO + "/"

NAME_DATABASE = "firstdatabase"
USER_COLLECTION = "users"

cliente = None
baseDatos = None


def coneccion():
    try:
        global cliente
        global baseDatos
        cliente = pymongo.MongoClient(MONGO_URI,serverSelectionTimeoutMS = MONGO_TIME_OUT)
        cliente.server_info()
        baseDatos = cliente[NAME_DATABASE]

        print("coneccion a mongo exitosa")
    except pymongo.errors.ServerSelectionTimeoutError as errorTime:
        print("tiempo excedido: " + errorTime)
    except pymongo.errors.ConnectionFailure as errorConnection:
        print("fallo al conectarse mongo db: " + errorConnection)


def queryMongoDB(collection = "", find = {}):
    coleccion = baseDatos[collection]
    for document in coleccion.find(find):
        pprint(document)



def insertDocument(collection = "", username="", age = 0, email= ""):
    coleccion = baseDatos[collection]
    document= {'username': username, 'age': age, 'email':email} 
    coleccion.insert_one(document)


def updateDocument(collection = "", usern="", **datos):
    coleccion = baseDatos[collection]
    user = coleccion.find({"username": usern})[0]
    print(user['_id'])
    print(datos)
    
    id = {'_id': ObjectId(user['_id'])}
    values_modify = {"$set":datos}
    
    coleccion.update_one(id,values_modify)

def DeleteDocument(collection = "", usern="",):
    coleccion = baseDatos[collection]
    user = coleccion.find({"username": usern})[0]
    id = {'_id': ObjectId(user['_id'])}

    coleccion.delete_one(id)

def testConsultas():
    # Buscar al usuario Coby
    queryMongoDB(USER_COLLECTION, {'username': 'Coby'})
    # Buscar a todos los usuarios
    queryMongoDB(USER_COLLECTION)
    # Buscar al usuario maria
    queryMongoDB(USER_COLLECTION, {'username': 'maria'})



def testInsertarDatos():

    # Crea un nuevo documento a la coleccion de usuario
    insertDocument(USER_COLLECTION,'maria',23,'maria@email.net')


def tesModificarDatos():
    # actualiza el usuario 5 y modifica su nombre y email
    updateDocument(USER_COLLECTION, 'user5', username= 'Manuela', email= 'manu343@live.net')


def testEliminarDatos():
    DeleteDocument(USER_COLLECTION, 'user11')

if __name__ == '__main__':
    coneccion()
    #testConsultas()
    #testInsertarDatos()
    #tesModificarDatos()
    testEliminarDatos()
    testConsultas()
    cliente.close()
