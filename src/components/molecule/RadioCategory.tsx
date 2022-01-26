import { RadioGroup, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../globalState/categoryState";
import { RadioAtoms } from "../atoms/RadioAtoms";

type Props = {
	value: string | undefined;
};

export const RadioCategory: VFC<Props> = memo(() => {
	const [checkedValue, setCheckedValue] = useRecoilState(categoryState);
	const categoryList = ["メモ", "スケジュール", "TODOリスト"];

	useEffect(() => {
		console.log(checkedValue);
	}, [checkedValue]);

	return (
		<RadioGroup onChange={setCheckedValue} value={checkedValue}>
			<Stack direction="row">
				{categoryList.map((item) => {
					return (
						<RadioAtoms key={item} value={item}>
							{item}
						</RadioAtoms>
					);
				})}
			</Stack>
		</RadioGroup>
	);
});
