import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import theme from "./theme/theme";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<Toaster position="top-center" reverseOrder={false} />
					<Router />
				</ChakraProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
