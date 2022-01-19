import { AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { memoListState } from "../globalState/memoListState";
import { memoApi } from "../libs/api";
import { FetchMemoList } from "../types/FetchMemoList";

export const useMemoApi = () => {
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);

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
	const inputMemoList = async (body: FetchMemoList) => {
		try {
			const result: FetchMemoList = await memoApi.post("/memo", body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const editMemoList = async (body: FetchMemoList) => {
		try {
			const result = await memoApi.put(`/memo/${392}`, body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteMemoList = async () => {
		try {
			const result = await memoApi.delete(`/memo/${395}`);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	return { fetchMemoList, inputMemoList, editMemoList, deleteMemoList, memoList };
};
