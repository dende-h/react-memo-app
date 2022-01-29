import { memo } from "react";
import { Box, Image, Flex, Stack, Text } from "@chakra-ui/react";
import FirstPageFooterLayout from "../templates/FirstPageFooterLayout";
import { PrimaryButton } from "../atoms/PrimaryButton";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AppIntroduction = memo(() => {
	const introductionTexts = ["ちょっとしたメモ", "予定のカレンダー", "TODOリスト"];
	const onClickRegisterButton = () => {
		toast.error("新規登録は未実装です");
	};

	return (
		<FirstPageFooterLayout>
			<Flex>
				<Box
					w={"100%"}
					bgColor={"gray.200"}
					backgroundImage={`url(${process.env.PUBLIC_URL}/pablo_picasso_38.png)`}
					backgroundSize={"cover"}
					backgroundPosition="center"
				>
					<Image
						src={`${process.env.PUBLIC_URL}/cat9302345_TP_V.jpg`}
						height={"800px"}
						opacity={"0.4"}
						_hover={{ opacity: "1" }}
					/>
				</Box>
				<Box
					backgroundImage={`url(${process.env.PUBLIC_URL}/KAZ829001.jpg)`}
					backgroundSize={"cover"}
					w={"70%"}
					opacity={"0.8"}
					textAlign={"center"}
				>
					<Stack>
						<Text as={"h1"} fontSize={"35px"} fontFamily={"cursive"}>
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
