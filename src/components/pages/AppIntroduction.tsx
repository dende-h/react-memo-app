import { memo } from "react";
import { Box, Image, Flex, Stack } from "@chakra-ui/react";
import FirstPageFooterLayout from "../templates/FirstPageFooterLayout";
import { PrimaryButton } from "../atoms/PrimaryButton";

const AppIntroduction = memo(() => {
	return (
		<FirstPageFooterLayout>
			<Flex>
				<Box w={"100%"} bgColor={"gray.200"}>
					<Image src={`${process.env.PUBLIC_URL}/cat9302345_TP_V.jpg`} height={"750px"} opacity={"0.6"} />
				</Box>
				<Box
					backgroundImage={`url(${process.env.PUBLIC_URL}/KAZ829001.jpg)`}
					backgroundSize={"cover"}
					w={"70%"}
					opacity={"0.6"}
					textAlign={"center"}
				>
					<Stack>
						<Box></Box>
						<Box>
							<PrimaryButton bgColor="teal.400" size="lg">
								新規アカウント登録
							</PrimaryButton>
						</Box>
						<Box></Box>
					</Stack>
				</Box>
			</Flex>
		</FirstPageFooterLayout>
	);
});
export default AppIntroduction;
