import { RadioGroup, Stack, useRadioGroup } from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../globalState/categoryState";
import { useRadio } from "../../hooks/useRadio";
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
