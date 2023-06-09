// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});

contextBridge.exposeInMainWorld("versions", {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
	// we can also expose variables, not just functions
});

contextBridge.exposeInMainWorld("ipc", {
	ping: () => ipcRenderer.invoke("ping"),
	startRecording: () => ipcRenderer.invoke("startRecording"),
	stopRecording: () => ipcRenderer.invoke("stopRecording"),
});
