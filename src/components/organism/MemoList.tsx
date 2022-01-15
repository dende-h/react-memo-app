import { Box, Button, Text } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { memoListState } from "../../globalState/memoListState";
import { FetchMemoList } from "../../types/FetchMemoList";

export const MemoList = () => {
	const token = localStorage.getItem("authToken");
	const API_BASEURL = "https://raisetech-memo-api.herokuapp.com/api";
	const headers = { Authorization: `Bearer ${token}` };
	const headers2 = { "Content-Type": "application/json" };
	const postheaders = { headers, headers2 };
	const body = {
		title: "今日の講義について",
		category: "授業メモ",
		description: "変更されましたww",
		date: "2021/08/01",
		mark_div: 1
	};
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);

	useEffect(() => {
		FetchMemoList();
	}, []);
	const FetchMemoList = async () => {
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await axios.get(API_BASEURL + "/memos", { headers });
			setMemoList(result.data);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	console.log(memoList);
	const InputMemoList = async () => {
		try {
			const result: FetchMemoList = await axios.post(API_BASEURL + "/memo", body, postheaders);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const EditMemoList = async () => {
		try {
			const result = await axios.put(API_BASEURL + `/memo/${392}`, body, postheaders);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const DeleteMemoList = async () => {
		try {
			const result = await axios.delete(API_BASEURL + `/memo/${386}`, { headers });
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
