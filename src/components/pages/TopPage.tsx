import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import { memo } from "react";
import { TextEditor } from "../atoms/TextEditor";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";

const TopPage = memo(() => {
	return (
		<>
			<HeaderLayout>
				<MemoList />
			</HeaderLayout>
		</>
	);
});
export default TopPage;
