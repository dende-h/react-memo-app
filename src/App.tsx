import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import theme from "./theme/theme";
import { RecoilRoot } from "recoil";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<RecoilRoot>
						<Toaster position="top-center" reverseOrder={false} />
						<Router />
					</RecoilRoot>
				</ChakraProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
