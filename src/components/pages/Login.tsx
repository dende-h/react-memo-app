import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../organism/LoginForm";
import TitleHeaderFooterLayout from "../templates/TitleHeaderFooterLayout";

export const Login = memo(() => {
	const { state } = useLocation();
	const [trueCount, setTrueCount] = useState<number>(0);
	useEffect(() => {
		console.log(trueCount);
		if (state === true) {
			setTrueCount(trueCount + 1);
		}
		if (trueCount === 1) {
			toast("Good Job!", {
				icon: "👏"
			});
		}
	}, [state]);
	return (
		<TitleHeaderFooterLayout>
			<LoginForm />
		</TitleHeaderFooterLayout>
	);
});
