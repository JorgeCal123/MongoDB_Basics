import pymongo
from pprint import pprint

from bson.objectid import ObjectId

MONGO_HOST = "localhost";
NAME_DATABASE = "firstdatabase"
USER_COLLECTION = "users"


cliente = None
collectionsDB = None


def coneccion():
    try:
        global cliente
        global collectionsDB
        cliente = pymongo.MongoClient(MONGO_HOST)
        collectionsDB = cliente[NAME_DATABASE]
    except pymongo.errors.ServerSelectionTimeoutError as errorTime:
        print("tiempo excedido: " + errorTime)
    except pymongo.errors.ConnectionFailure as errorConnection:
        print("fallo al conectarse mongo db: " + errorConnection)


def showInfoDatabase():
        collectionsDB = cliente[NAME_DATABASE]

        print("\n----- // coneccion a mongo exitosa \\\\ -------")

        print ("BASES DE DATOS:")
        print (cliente.list_database_names())
        print ("COLECCIONES:")

        print (collectionsDB.list_collection_names())

        print("\n")

def createCollection(name_Colection, **values):
    coleccion = collectionsDB[name_Colection]
    coleccion.insert_one(values)


def deleteCollection(name_Colection, **values):
    coleccion = collectionsDB[name_Colection]
    coleccion.drop()

def queryMongoDB(collection = "", find = {}):
    coleccion = collectionsDB[collection]
    for document in coleccion.find(find):
        pprint(document)



def insertDocument(collection = "", username="", age = 0, email= ""):
    coleccion = collectionsDB[collection]
    document= {'username': username, 'age': age, 'email':email} 
    coleccion.insert_one(document)


def updateDocument(collection = "", usern="", **datos):
    coleccion = collectionsDB[collection]
    user = coleccion.find({"username": usern})[0]
    print(user['_id'])
    print(datos)
    
    id = {'_id': ObjectId(user['_id'])}
    values_modify = {"$set":datos}
    
    coleccion.update_one(id,values_modify)

def DeleteDocument(collection = "", usern="",):
    coleccion = collectionsDB[collection]
    user = coleccion.find({"username": usern})[0]
    id = {'_id': ObjectId(user['_id'])}

    coleccion.delete_one(id)



def testCrearColleccion():
    createCollection("aves", nameAve ="perro", age= 1)


def testElminarColleccion():
    deleteCollection("aves")


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
    #Elimina al usuario11
    DeleteDocument(USER_COLLECTION, 'user11')

if __name__ == '__main__':
    coneccion()
    #testCrearColleccion()
    testElminarColleccion()
    showInfoDatabase()
    #testConsultas()
    #testInsertarDatos()
    #tesModificarDatos()
    #testEliminarDatos()
    #testConsultas()
    cliente.close()
