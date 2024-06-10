const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
  const isDev = await import("electron-is-dev").then(
    (module) => module.default
  );

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const startUrl = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "build", "index.html")}`;
  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// const path = require("path");
// const url = require("url");
// const isDev = require("electron-is-dev");

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({ width: 900, height: 680 });
//   mainWindow.loadURL(
//     isDev
//       ? "http://localhost:3000"
//       : `file://${path.join(__dirname, "../build/index.html")}`
//   );
//   mainWindow.on("closed", () => (mainWindow = null));
// }

// app.on("ready", createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
