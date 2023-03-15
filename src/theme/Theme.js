import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./ButtonTheme";

export default extendBaseTheme({
	colors: {
		// Add new color
		primary: {
			10: "#f0eefe",
			50: "#d1d0e6",
			100: "#b1b0cf",
			200: "#9a9ac0",
			300: "#9191ba",
			400: "#7672a6",
			500: "#5f588c",
			600: "#4d456e",
			700: "#393150",
			800: "#231c32",
			900: "#0f0917",
		},
		secondary: {
			100: "#ffffff",
			200: "#fbfafb",
			300: "#f7f6f6",
			400: "#f3f0f1",
			500: "#f1eeef",
			600: "#efeced",
			700: "#ece9ea",
			800: "#e9e7e8",
			900: "#e7e4e5",
		},
	},
	components: {
		Button: buttonTheme,
	},
	fontConfig: {
		Montserrat: {
			100: {
				normal: "Montserrat-ExtraLight",
			},
			200: {
				normal: "Montserrat-ExtraLight",
			},
			300: {
				normal: "Montserrat-Light",
			},
			400: {
				normal: "Montserrat-Regular",
			},
			500: {
				normal: "Montserrat-Medium",
			},
			600: {
				normal: "Montserrat-SemiBold",
			},
			700: {
				normal: "Montserrat-Bold",
			},
			800: {
				normal: "Montserrat-Bold",
			},
			900: {
				normal: "Montserrat-Bold",
			},
		},
	},
	fonts: {
		heading: "Montserrat",
		body: "Montserrat",
		mono: "Montserrat",
	},
	config: {
		useSystemColorMode: false,
		initialColorMode: "light",
		strictMode: "warn",
	},
});
