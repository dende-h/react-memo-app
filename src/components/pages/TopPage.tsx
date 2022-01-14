import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import { memo } from "react";
import { TextEditor } from "../atoms/TextEditor";
import { MemoList } from "../organism/MemoList";

const TopPage = memo(() => {
	return (
		<>
			<MemoList />
		</>
	);
});
export default TopPage;
