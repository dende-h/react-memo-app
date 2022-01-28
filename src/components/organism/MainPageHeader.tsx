import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

export const MainPageHeader = () => {
	return (
		<>
			<Flex bg="teal.100" w="100%" h={["50px", "60px", "70px"]} justifyContent={"center"}>
				<Box as={"h1"} p={[0, 1, 2]} fontFamily={"fantasy"} fontSize={["md", "xl", "xx-large"]}>
					カレンダーメモアプリ
				</Box>
				<Spacer />
				<Box p={[0, 2, 3]}>
					<Button>ログアウト</Button>
				</Box>
			</Flex>
		</>
	);
};
