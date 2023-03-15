import React from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import extendTheme from "./theme/Theme";
import Landing from "./screens/landing";

function App() {
	return (
		<ChakraBaseProvider theme={extendTheme}>
			<Landing />
		</ChakraBaseProvider>
	);
}

export default App;
