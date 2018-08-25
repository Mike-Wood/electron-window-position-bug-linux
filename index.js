var electron       = require('electron');
var BrowserWindow  = electron.BrowserWindow;
var app            = electron.app;
var globalShortcut = electron.globalShortcut;

app.on('ready', function () {
    var testWin = new BrowserWindow();
    testWin.on('page-title-updated', function (evt) {
        evt.preventDefault();
    });

    testWin.loadURL('https://electronjs.org/');

    globalShortcut.register('Super+Shift+A', function () {
        testWin.setPosition(500, 100);
    });
});