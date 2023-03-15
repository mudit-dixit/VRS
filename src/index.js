import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function render() {
	const container = document.getElementById("root");
	const root = createRoot(container); // createRoot(container!) if you use TypeScript
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

render();
