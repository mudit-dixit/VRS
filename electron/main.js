// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, utilityProcess } = require("electron");
const path = require("path");
const Stream = require("node-rtsp-stream");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static").replace("app.asar", "app.asar.unpacked");
const ffprobePath = require("ffprobe-static").path.replace("app.asar", "app.asar.unpacked");
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: APP_PRELOAD_WEBPACK_ENTRY,
		},
	});

	mainWindow.once("ready-to-show", () => {
		mainWindow.maximize();
	});

	// and load the index.html of the app.
	console.log("APP_WEBPACK_ENTRY ", APP_WEBPACK_ENTRY);
	//mainWindow.loadFile(APP_WEBPACK_ENTRY);
	mainWindow.loadURL(APP_WEBPACK_ENTRY);

	// Open the DevTools.
	mainWindow.webContents.openDevTools({ mode: "detach" });

	console.log("ffmpegPath : ", ffmpegPath);

	console.log("ffprobePath : ", ffprobePath);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	//initializeStream();

	ipcMain.handle("ping", () => ffmpegPath);
	ipcMain.handle("startRecording", startRecording);
	ipcMain.handle("stopRecording", stopRecording);

	app.on("activate", () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

const initializeStream = () => {
	const stream = new Stream({
		name: "name",
		//streamUrl: "rtsp://client:twiga2016@10.0.0.1:9099/stream",
		streamUrl: "rtsp://localhost:9099/stream",
		wsPort: 9999,
		ffmpegOptions: {
			// options ffmpeg flags
			"-hide_banner": "", // an option with no neccessary value uses a blank string
			"-y": "", // options with required values specify the value after the key
			"-loglevel": "error",
		},
	});
};

let recordingProcess = null;

const startRecording = () => {
	console.log("#### startRecording.");
	recordingProcess = utilityProcess.fork(path.join(__dirname, "recordStream.js"));
};

const stopRecording = () => {
	console.log("#### stopRecording.");
	if (recordingProcess) {
		recordingProcess.kill();
	}
};
