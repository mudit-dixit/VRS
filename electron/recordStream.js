const fs = require("fs");
const path = require("path");

const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static").replace("app.asar", "app.asar.unpacked");
const ffprobePath = require("ffprobe-static").path.replace("app.asar", "app.asar.unpacked");
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

var root = path.dirname(require.main.filename);
var recordingPath = path.join(root, "recording", "test.mkv");

console.log("RecordStream  Path : ", recordingPath);
console.log("\n");

const recordingProcessVideo = ffmpeg()
	.input("rtsp://client:twiga2016@10.0.0.1:9099/stream")
	.inputOption("-hide_banner")
	.inputOption("-rtsp_transport tcp")
	.inputOption("-use_wallclock_as_timestamps 1")
	.videoCodec("libx264")
	.audioCodec("aac")
	.outputOption("-f segment")
	.outputOption("-reset_timestamps 1")
	.outputOption("-segment_time 900")
	.outputOption("-segment_format mkv")
	.outputOption("-segment_atclocktime 1")
	.outputOption("-strftime 1")
	.output(`${recordingPath}/%Y%m%dT%H%M%S.mkv`)
	.on("start", (commandLine) => {
		console.log("Video recorder Started");
		console.log("Command : " + commandLine);
	})
	.on("error", (error) => {
		console.error(`Encoding Error: ${error.message}`);
	})
	.on("exit", () => console.log("Video recorder exited"))
	.on("close", () => console.log("Video recorder closed"))
	.on("end", () => console.log("Video Transcoding succeeded !"))
	.run();
