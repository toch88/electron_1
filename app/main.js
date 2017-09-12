const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width:500,
        height:500
    })
})