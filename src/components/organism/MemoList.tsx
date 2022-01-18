import { Box, Button } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { memoApi } from "../../libs/api";
import { memoListState } from "../../globalState/memoListState";
import { FetchMemoList } from "../../types/FetchMemoList";

export const MemoList = () => {
	const body = {
		title: "今日の講義について",
		category: "授業メモ",
		description: "なんでしょう",
		date: "2021/08/01",
		mark_div: 1
	};
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);

	useEffect(() => {
		fetchMemoList();
	}, []);
	const fetchMemoList = async () => {
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await memoApi.get("/memos");
			setMemoList(result.data);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(memoList);
	const inputMemoList = async () => {
		try {
			const result: FetchMemoList = await memoApi.post("/memo", body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const editMemoList = async () => {
		try {
			const result = await memoApi.put(`/memo/${392}`, body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteMemoList = async () => {
		try {
			const result = await memoApi.delete(`/memo/${394}`);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Box bg="white" textAlign={"center"} w="sm" minHeight={"xl"} m="4" borderRadius={"lg"}>
				{memoList.map((item) => item.description)}
			</Box>
			<Button onClick={fetchMemoList}>ボタン</Button>
			<Button onClick={inputMemoList}>ボタン2</Button>
			<Button onClick={editMemoList}>ボタン3</Button>
			<Button onClick={deleteMemoList}>ボタン4</Button>
		</>
	);
};
