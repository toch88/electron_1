const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width:501,
        height:500
    })
})