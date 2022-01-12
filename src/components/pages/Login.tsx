import { memo } from "react";
import { LoginForm } from "../organism/LoginForm";
import TitleHeaderLayout from "../templates/TitleHeaderLayout";

export const Login = memo(() => {
	return (
		<TitleHeaderLayout>
			<LoginForm />
		</TitleHeaderLayout>
	);
});
