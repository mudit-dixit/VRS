module.exports = {
	packagerConfig: {
		asar: {
			unpackDir: "node_modules/*-static",
		},
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				name: "VRS",
			},
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin", "linux", "win32"],
		},
		{
			name: "@electron-forge/maker-deb",
			config: {},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {},
		},
	],
	plugins: [
		{
			name: "@electron-forge/plugin-webpack",
			config: {
				//devContentSecurityPolicy: `default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' data:; connect-src ws://localhost:9999/;`,
				mainConfig: "./webpack.main.config.js",
				renderer: {
					config: "./webpack.renderer.config.js",
					entryPoints: [
						{
							html: "./public/index.html",
							js: "./electron/renderer.js",
							name: "app",
							preload: {
								js: "./electron/preload.js",
							},
						},
					],
				},
				devServer: {
					hot: true,
				},
			},
		},
		{
			name: "@electron-forge/plugin-auto-unpack-natives",
			config: {},
		},
	],
};
