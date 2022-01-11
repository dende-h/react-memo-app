import { Box, Flex, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { SlideSwitch } from "../atoms/SlideSwitch";
import { PopoverContainer } from "../templates/PopoverContainer";
import { isOnSwitch } from "../../globalState/isOnSwitch";
import { useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";

export const ReadMe = memo(() => {
	const [isOn, setIsOn] = useRecoilState(isOnSwitch);
	useEffect(() => {
		setIsOn(false);
	}, [setIsOn]);
	const navigate = useNavigate();
	const onSlideSwitch = () => {
		setIsOn(!isOn);
		if (isOn) {
			navigate("/blank", { state: isOn, replace: true });
		}
	};

	return (
		<PopoverContainer trigger="click" buttonName="Click read me" popoverHeaderText="なんでもメモアプリ">
			<Box>
				<Flex>
					<Box wordBreak={"break-all"} textAlign={"left"}>
						<Text>サンプル用に実装されたAPIを利用してCRUD処理実装したメモアプリです。</Text>
						<Text>ログイン用のTokenは24時間で失効すします。</Text>
						<Text>下記のログイン情報でお試しください。</Text>
						<Text>Mail : dende@example.com</Text>
						<Text>pass : dende0206</Text>
						<Text>下のスイッチは絶対に押さないで!!</Text>
					</Box>
				</Flex>
				<PopoverContainer
					trigger={"hover"}
					popoverHeaderText="絶対ONにしないで"
					atoms={<SlideSwitch onChange={onSlideSwitch} />}
				>
					<Text>ダメですよ？なにしてるんですか？ホバーを外してください</Text>
				</PopoverContainer>
			</Box>
		</PopoverContainer>
	);
});
