/*const information = document.getElementById("info");
information.innerText = `Renderer : This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const recordButtonStart = document.getElementById("start-record");
recordButtonStart.addEventListener("click", function () {
	window.ipc.startRecording();
});

const recordButtonStop = document.getElementById("stop-record");
recordButtonStop.addEventListener("click", function () {
	window.ipc.stopRecording();
});

const func = async () => {
	const response = await window.ipc.ping();
	console.log(response); // prints out 'pong'
};

func();

const player = new JSMpeg.Player("ws://localhost:9999", {
	canvas: document.getElementById("canvas"), // Canvas should be a canvas DOM element
	autoplay: true,
});*/

import "../src/index";
