import { Link, HStack, Center, Box, Stack } from "@chakra-ui/react";

export const TitleFooter = () => {
	const onClickLink = (url: string) => {
		window.location.assign(url);
	};
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
						<Link onClick={() => onClickLink("https://github.com/dende-h")}>{`DenDe's Github page`}</Link>
						<Link onClick={() => onClickLink("https://twitter.com/dende49592814")}>Twitter</Link>
						<Link onClick={() => onClickLink("https://qiita.com/dende-h")}>Qiita My page</Link>
						<Link
							onClick={() =>
								onClickLink("https://perpetual-hemisphere-7a3.notion.site/4d56af5f032b484186cef530f8d77628")
							}
						>{`Development memo's`}</Link>
						<Link
							onClick={() => onClickLink("https://app.build-up.info/portfolio/b5UTNgoTd")}
						>{`BuildUp portfolio`}</Link>
					</HStack>
				</Stack>
			</Center>
		</>
	);
};
