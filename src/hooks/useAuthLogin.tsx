import { AxiosResponse } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { loginApi } from "../env/api";

type Props = {
	email: string;
	password: string;
};
export const useAuthLogin = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const navigate: NavigateFunction = useNavigate();
	const authLogin = async (authKey: Props) => {
		try {
			setLoading(true);
			const result: AxiosResponse = await loginApi.post("/login", authKey);
			localStorage.setItem("authToken", result.data.access_token);
			console.log(result);
			navigate("/top", { state: result, replace: false });
		} catch (error) {
			setLoading(false);
			console.log(authKey);
			toast.error("ログインできません!");
		}
	};
	return { authLogin, loading };
};
