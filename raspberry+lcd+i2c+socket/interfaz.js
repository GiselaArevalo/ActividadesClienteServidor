//GNU nano 2.7.4                                                                          File: interfaz.js

var LCD= require('lcdi2c')
var pantalla= new LCD (1,0x27,20,4)
var express = require('express')
var  app= new express()
var http= require('http').Server(app)
var io=require('socket.io')(http)

pantalla.clear()
var puertito=5000
app.use(express.static(__dirname+"/public"))
app.get("/",function(res,req){
         res.redirect('index.html')
})


io.on('connection',function(socket){
        console.log('its ok ')
        socket.on('data',function(kill){
                pantalla.println(kill.toString(),2)
        console.log(kill.toString())
})

})

http.listen(puertito)
console.log('asdf')
