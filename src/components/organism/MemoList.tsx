import { Box, Button } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deleteMemoApi, editMemoApi, getMemoApi, inputMemoApi } from "../../env/api";
import { memoListState } from "../../globalState/memoListState";
import { FetchMemoList } from "../../types/FetchMemoList";

export const MemoList = () => {
	const body = {
		title: "今日の講義について",
		category: "授業メモ",
		description: "色々変更しました",
		date: "2021/08/01",
		mark_div: 1
	};
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);

	useEffect(() => {
		FetchMemoList();
	}, []);
	const FetchMemoList = async () => {
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await getMemoApi.get("/memos");
			setMemoList(result.data);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(memoList);
	const InputMemoList = async () => {
		try {
			const result: FetchMemoList = await inputMemoApi.post("/memo", body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const EditMemoList = async () => {
		try {
			const result = await editMemoApi.put(`/memo/${392}`, body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const DeleteMemoList = async () => {
		try {
			const result = await deleteMemoApi.delete(`/memo/${386}`);
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
			<Button onClick={FetchMemoList}>ボタン</Button>
			<Button onClick={InputMemoList}>ボタン2</Button>
			<Button onClick={EditMemoList}>ボタン3</Button>
			<Button onClick={DeleteMemoList}>ボタン4</Button>
		</>
	);
};
