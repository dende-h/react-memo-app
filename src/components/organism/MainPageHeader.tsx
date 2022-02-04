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
			<Flex bg="teal.100" w="100%" h={["50px", "60px", "70px"]} justifyContent={"center"}>
				<Box as={"h1"} p={[0, 1, 2]} fontFamily={"cursive"} fontSize={["md", "xl", "xx-large"]}>
					“ Note Me ”
				</Box>
				<Box p={[0, 1, 5]}>
					<Link to={"/board"}>Todoボードを表示</Link>
				</Box>
				<Box p={[0, 1, 5]}>
					<Link to={"/top"}>カレンダーを表示</Link>
				</Box>
				<Spacer />
				<Box p={[0, 2, 3]}>
					<PrimaryButton onClick={onClickRouter}>ログアウト</PrimaryButton>
				</Box>
			</Flex>
		</>
	);
});
