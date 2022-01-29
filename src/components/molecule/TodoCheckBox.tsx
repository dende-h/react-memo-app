import { memo, useEffect, useState, VFC } from "react";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";
import { CheckBox } from "../atoms/CheckBox";

type Props = {
	oneMemo: FetchMemoList;
};

export const TodoCheckBox: VFC<Props> = memo((props: Props) => {
	const { oneMemo } = props;
	const [isChecked, setIsChecked] = useState(false);
	const { editMemoList } = useMemoApi();

	useEffect(() => {
		oneMemo.mark_div === 1 ? setIsChecked(true) : setIsChecked(false);
	}, []);

	const onChangeCheckBox: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined = () => {
		if (oneMemo.mark_div === 1) {
			const editOneMemo: FetchMemoList = { ...oneMemo, mark_div: 0 };
			delete editOneMemo.id;
			console.log("1→0");
			editMemoList(oneMemo.id, editOneMemo);
			setIsChecked(false);
		} else if (oneMemo.mark_div === 0) {
			const editOneMemo: FetchMemoList = { ...oneMemo, mark_div: 1 };
			delete editOneMemo.id;
			console.log("0→1");
			editMemoList(oneMemo.id, editOneMemo);
			setIsChecked(true);
		}
	};

	return (
		<CheckBox onChange={onChangeCheckBox} isChecked={isChecked}>
			重要項目に追加
		</CheckBox>
	);
});
