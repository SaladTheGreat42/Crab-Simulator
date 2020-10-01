// npm modules
const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
  const mainWindow = new BrowserWindow({ // creates the browser window
    width: 800,
    height: 600
  })
  mainWindow.loadFile("./website/index.html") // loads index.html into window
}

// waits until app is ready, then creates window
app.whenReady()
  .then(() => {
    createWindow()
    app.on("activate", () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if(process.platform !== "darwin") app.quit()
})
