import { useCallback } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const useRouteHandle = () => {
	const navigate: NavigateFunction = useNavigate();
	const onDoubleClickRouter = useCallback(
		(urlProps: string, state: object, replace: boolean) => {
			navigate(urlProps, { state, replace });
		},
		[navigate]
	);
	const onClickRouter = useCallback(
		(urlProps: string, state: object, replace: boolean) => {
			navigate(urlProps, { state, replace });
		},
		[navigate]
	);
	return { onDoubleClickRouter, onClickRouter };
};
