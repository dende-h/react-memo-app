import { RadioGroup, Stack } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { RadioAtoms } from "../atoms/RadioAtoms";

export const RadioCategory: VFC = memo(() => {
	const [value, setValue] = useState("メモ");
	return (
		<RadioGroup onChange={setValue} value={value}>
			<Stack direction="row">
				<RadioAtoms value="メモ">メモ</RadioAtoms>
				<RadioAtoms value="スケジュール">スケジュール</RadioAtoms>
				<RadioAtoms value="TODOリスト">TODOリスト</RadioAtoms>
			</Stack>
		</RadioGroup>
	);
});
