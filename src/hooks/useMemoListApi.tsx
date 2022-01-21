import { AxiosResponse } from "axios";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memoListState } from "../globalState/memoListState";
import { memoApi } from "../libs/api";
import { FetchMemoList } from "../types/FetchMemoList";

type body = Omit<FetchMemoList, "id">;

export const useMemoApi = () => {
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);
	const navigate = useNavigate();
	const authErrorNavigate = useCallback(() => {
		toast.error("ログアウトされました。再度ログインしてください");
		navigate("/login");
	}, []);

	const fetchMemoList = useCallback(async () => {
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await memoApi.get("/memos");
			setMemoList(result.data);
			console.log(result);
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const inputMemoList = useCallback(async (body: body) => {
		try {
			const result: FetchMemoList = await memoApi.post("/memo", body);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const editMemoList = useCallback(async (id: string | undefined, body: body) => {
		try {
			const result = await memoApi.put(`/memo/${id}`, body);
			console.log(result.data);
			fetchMemoList();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const deleteMemoList = useCallback(async () => {
		try {
			const result = await memoApi.delete(`/memo/${395}`);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	}, []);
	return { fetchMemoList, inputMemoList, editMemoList, deleteMemoList, memoList };
};
