import { Box, Flex, Spacer } from "@chakra-ui/react";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const MainPageHeader = memo(() => {
	const navigate = useNavigate();
	const onClickRouter = () => {
		navigate("/");
	};
	return (
		<>
			<Flex bg="teal.100" w="100%" h={["50px", "60px", "70px"]} justifyContent={"center"} fontFamily={"cursive"}>
				<Box as={"h1"} p={[0, 1, 2]} fontSize={["md", "xl", "xx-large"]}>
					“ Note Me ”
				</Box>
				<Box p={[0, 1, 5]} _hover={{ color: "blue" }}>
					<Link to={"/board"}>Show TodoBoard</Link>
				</Box>
				<Box p={[0, 1, 5]} _hover={{ color: "blue" }}>
					<Link to={"/top"}>Show Calendar</Link>
				</Box>
				<Spacer />
				<Box p={[0, 2, 3]}>
					<PrimaryButton onClick={onClickRouter} bgColor={"telegram.500"} color={"gray.50"} _hover={{ opacity: 0.6 }}>
						ログアウト
					</PrimaryButton>
				</Box>
			</Flex>
		</>
	);
});
