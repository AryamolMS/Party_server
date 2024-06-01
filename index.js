

const jsonserver = require('json-server')

const partyServer = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

partyServer.use(middleware)
partyServer.use(router)

const port = 3000 || process.env.PORT

partyServer.listen(port,()=>{
    console.log(`Employee server listening to port no ${port}`);
})