import { Box, Divider, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { OneMemo } from "../molecule/OneMemo";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";
import { memoListState } from "../../globalState/memoListState";
import { useSetRecoilState } from "recoil";

export const MemoList: VFC = memo(() => {
	const { fetchMemoList, memoList } = useMemoApi();
	const setMemoList = useSetRecoilState(memoListState);

	useEffect(() => {
		fetchMemoList();
	}, []);
	useEffect(() => {
		setMemoList(memoList);
		console.log("リスト更新しました");
	}, [memoList]);
	return (
		<>
			<Box bg="white" textAlign={"center"} w="sm" minHeight={"xl"} m="4" borderRadius={"lg"} p={"4"} shadow={"lg"}>
				<Stack spacing={"2"}>
					<Box as={"h1"} fontFamily={"fantasy"} fontSize={"xl"}>
						MemoList
					</Box>
					<Divider />
					<Box>
						{memoList.map((item, index) => {
							const oneMemo: FetchMemoList = memoList[index];
							return <OneMemo key={item.id} oneMemo={oneMemo} />;
						})}
					</Box>
				</Stack>
			</Box>
		</>
	);
});
