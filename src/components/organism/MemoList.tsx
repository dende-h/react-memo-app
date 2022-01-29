import { Box, Divider, Flex, Spacer, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { OneMemo } from "./OneMemo";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";
import { memoListState } from "../../globalState/memoListState";
import { useSetRecoilState } from "recoil";
import { ModalInput } from "../molecule/ModalInput";
import { CategoryTab } from "../templates/CategoryTab";

export const MemoList: VFC = memo(() => {
	const { fetchMemoList, memoList } = useMemoApi();
	const setMemoList = useSetRecoilState<FetchMemoList[]>(memoListState);

	useEffect(() => {
		fetchMemoList();
	}, []);
	useEffect(() => {
		setMemoList(memoList);
		console.log("リスト更新しました");
	}, [memoList]);
	return (
		<>
			<Box bg="white" w={["sm", "md", "lg"]} minHeight={"sm"} m="4" borderRadius={"lg"} p={"2"} shadow={"lg"}>
				<Stack spacing={"2"}>
					<Flex justify={"center"}>
						<Box marginLeft={5}></Box>
						<Spacer />
						<Box fontFamily={"serif"} fontSize={"xx-large"}>
							MemoList
						</Box>
						<Spacer />
						<Box justifyContent={"end"}>
							<ModalInput />
						</Box>
					</Flex>
					<CategoryTab>
						<Box>
							<Divider />
							<Box>
								{memoList.map((item, index) => {
									const oneMemo: FetchMemoList = memoList[index];
									return <OneMemo key={item.id} oneMemo={oneMemo} />;
								})}
							</Box>
						</Box>
					</CategoryTab>
				</Stack>
			</Box>
		</>
	);
});
