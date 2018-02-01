const electron = require('electron');
const {app, BrowserWindow,ipcMain} = require('electron');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });
    
    mainWindow.loadURL('file://' + __dirname + '/windows/main/main.html');
    mainWindow.openDevTools();
});

function createInsertWindow(){
    insertWindow = new BrowserWindow({
        width: 640,
        height: 480,
        show: false
    });
    
    insertWindow.loadURL('file://' + __dirname + '/windows/insert/insert.html');
    
    insertWindow.on('closed', function(){
        insertWindow = null;
    });
}

ipcMain.on('toggle-insert-view', function(){
    if(!insertWindow){
        createInsertWindow();
    }
    return(!insertWindow.isClosed() && insertWindow.isVisible()) ?              insertwindow.hide() : insertWindow.show();
});