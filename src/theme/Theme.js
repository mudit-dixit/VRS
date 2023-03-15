import { extendBaseTheme } from "@chakra-ui/react";
import { buttonTheme } from "./ButtonTheme";

export default extendBaseTheme({
	colors: {
		// Add new color
		primary: {
			50: "#bfeaee",
			100: "#9bdce0",
			200: "#76d0d2",
			300: "#53c6c5",
			400: "#38B2AC",
			500: "#39aca7",
			600: "#298486",
			700: "#195a61",
			800: "#05303a",
			900: "#001016",
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
