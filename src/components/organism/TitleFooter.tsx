import { Link, HStack, Center, Box, Stack } from "@chakra-ui/react";

export const TitleFooter = () => {
	return (
		<>
			<Center bg={"teal.100"} h={"200px"} paddingBottom={10}>
				<Stack>
					<Box textAlign={"center"} fontSize={"30px"} fontFamily={"Century Gothic"} color={"blackAlpha.700"}>
						Info My Portfolio and SNS
					</Box>
					<HStack
						color={"blackAlpha.600"}
						fontSize={["15px", "20px", "25px"]}
						spacing={["20px", "30px", "100px"]}
						textAlign={"center"}
					>
						<Link>{`DenDe's Github page`}</Link>
						<Link>Twitter</Link>
						<Link>Qiita My page</Link>
						<Link>{`Development memo's`}</Link>
						<Link>{`BuildUp portfolio`}</Link>
					</HStack>
				</Stack>
			</Center>
		</>
	);
};
