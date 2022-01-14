import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "orange.50",
				color: "gray.750",
				fonts: "メイリオ"
			}
		}
	}
});
export default theme;
