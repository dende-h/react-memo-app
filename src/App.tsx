import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import theme from "./theme/theme";
import { RecoilRoot } from "recoil";
import { todoDragDropObjectState } from "./globalState/board/todoDragDropObjectState";

const initializeState = (mutableSnapshot: any) => {
	const item = localStorage.getItem(todoDragDropObjectState.key);
	if (item) {
		mutableSnapshot.set(todoDragDropObjectState, JSON.parse(item).value);
	}
};

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<RecoilRoot initializeState={initializeState}>
						<Toaster position="top-center" reverseOrder={false} />
						<Router />
					</RecoilRoot>
				</ChakraProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
