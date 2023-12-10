//import json-server
const jsonServer = require ('json-server')

//create a server using json-server
const mediaPlayerServer = jsonServer.create()

//setup path for the server
const router = jsonServer.router('db.json')

//return middleware used by json-server
const middleware = jsonServer.defaults() //for json -> js conversion

//setup port for backend
const port = 4000 || process.env.port

//use middleware and router 
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//to listen server for resolving requests from client
mediaPlayerServer.listen(port, () => {
  console.log('listening on port ' + port);
})