import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Blank = memo(() => {
	const { state } = useLocation();
	const navigate = useNavigate();
	setTimeout(() => {
		navigate("/login", { state, replace: false });
	}, 5000);

	return (
		<Box bg="black" w="100%" h="2000px">
			これは嘘です
		</Box>
	);
});
