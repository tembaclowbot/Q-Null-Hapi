'use strict'


// instance Hapi, const express = require('express)
const Hapi = require('@hapi/hapi')
const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })
    

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Hello world"
        }  
    })

    server.route({
      method: "GET",
      path: "/{id}",
      handler: (request, h) => {
          return `Hallo ${request.params.id}`    
      },
    });

    await server.start()
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit()
}) 


init()


