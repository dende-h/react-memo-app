import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memoListState } from "../globalState/memo/memoListState";
import { memoApi } from "../libs/api";
import { FetchMemoList } from "../types/FetchMemoList";

type body = Omit<FetchMemoList, "id">;

export const useMemoApi = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);
	const navigate = useNavigate();
	const authErrorNavigate = useCallback(() => {
		toast.error("ログアウトされました。再度ログインしてください");
		navigate("/login");
	}, []);

	const fetchMemoList = useCallback(async () => {
		setLoading(true);
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await memoApi.get("/memos");
			setMemoList(result.data);
			setLoading(false);
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const inputMemoList = useCallback(async (body: body) => {
		setLoading(true);
		try {
			await memoApi.post("/memo", body);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const editMemoList = useCallback(async (id: string | undefined, body: body) => {
		setLoading(true);
		try {
			const result = await memoApi.put(`/memo/${id}`, body);
			console.log(result.data);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const deleteMemoList = useCallback(async (id: string | undefined) => {
		setLoading(true);
		try {
			await memoApi.delete(`/memo/${id}`);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
		}
	}, []);
	return { fetchMemoList, inputMemoList, editMemoList, deleteMemoList, memoList, loading };
};
