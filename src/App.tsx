import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ChakraProvider>
					<Router />
				</ChakraProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
