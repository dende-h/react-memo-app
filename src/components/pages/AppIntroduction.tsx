import { memo, useState } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import FirstPageFooterLayout from "../templates/FirstPageFooterLayout";
import { PrimaryButton } from "../atoms/PrimaryButton";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { PopoverContainer } from "../templates/PopoverContainer";

const AppIntroduction = memo(() => {
	const introductionTexts = ["ちょっとしたメモ", "予定のカレンダー", "TODOリスト"];
	const onClickRegisterButton = () => {
		toast.error("新規登録は未実装です");
	};
	const [isOpen, setIsOpen] = useState(false);
	const open = () => {
		setIsOpen(true);
		console.log(isOpen);
	};
	const close = () => {
		setIsOpen(false);
		console.log(isOpen);
	};

	return (
		<FirstPageFooterLayout>
			<Flex>
				<Box
					position={"relative"}
					w={"100%"}
					h={"800px"}
					bgColor={"gray.200"}
					backgroundImage={`url(${process.env.PUBLIC_URL}/pablo_picasso_38.png)`}
					backgroundSize={"contain"}
					backgroundPosition="center"
				>
					<Box
						position="absolute"
						width="100%"
						height="100%"
						top={0}
						left={0}
						backgroundSize={"cover"}
						backgroundImage={`url(${process.env.PUBLIC_URL}/cat9302345_TP_V.jpg)`}
						opacity={"0.4"}
						_hover={{ opacity: "1" }}
						onMouseOver={() => open()}
						onMouseLeave={() => close()}
						textAlign={"center"}
					>
						<PopoverContainer
							components={
								<Box
									position="absolute"
									width="100%"
									height="100%"
									top={0}
									left={0}
									backgroundSize={"cover"}
									backgroundImage={`url(${process.env.PUBLIC_URL}/cat9302345_TP_V.jpg)`}
									opacity={"0.4"}
									_hover={{ opacity: "1" }}
									onMouseOver={() => open()}
									onMouseLeave={() => close()}
									textAlign={"center"}
								></Box>
							}
							trigger="hover"
							popoverHeaderText="にゃんこ先輩の教え"
							isOpen={isOpen}
							placement="left"
						>
							ジャンプはたまに土曜日発売だから気をつけろよ
						</PopoverContainer>
					</Box>
				</Box>
				<Box
					backgroundImage={`url(${process.env.PUBLIC_URL}/KAZ829001.jpg)`}
					backgroundSize={["cover"]}
					w={"70%"}
					h={"800px"}
					opacity={"0.8"}
					textAlign={"center"}
				>
					<Stack>
						<Text as={"h1"} fontSize={["35px"]} fontFamily={"cursive"}>
							A simple notepad that manages everything
						</Text>
						<Text as={"h1"} fontSize={"75px"} fontFamily={"cursive"} padding={"16"}>
							“ Note Me ”
						</Text>
						{introductionTexts.map((item) => {
							return (
								<Box key={item}>
									<Text fontFamily={"serif"} fontSize={"30px"}>
										{item}
									</Text>
								</Box>
							);
						})}
						<Text as={"h1"} fontSize={"35px"} fontFamily={"serif"}>
							全てまとめてシンプルに管理する
						</Text>
						<Box p={6}>
							<PrimaryButton bgColor="teal.400" size="lg" onClick={onClickRegisterButton}>
								新規アカウント登録
							</PrimaryButton>
						</Box>
						<Link to={"/login"}>
							{" "}
							<Text
								as={"h1"}
								fontSize={"20px"}
								fontFamily={"serif"}
								_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
							>
								すでにアカウントをお持ちの方はこちらからログイン
							</Text>
						</Link>
					</Stack>
				</Box>
			</Flex>
		</FirstPageFooterLayout>
	);
});
export default AppIntroduction;
