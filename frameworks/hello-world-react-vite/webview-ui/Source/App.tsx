import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";
import { vscode } from "./utilities/vscode";

function App() {
	function handleHowdyClick() {
		vscode.postMessage({
			command: "hello",
			text: "Hey there partner! 🤠",
		});
	}

	return (
		<main>
			<h1>Hello World!</h1>
			<VSCodeButton onClick={handleHowdyClick}>Howdy!</VSCodeButton>
		</main>
	);
}

export default App;
