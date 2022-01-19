import { useCallback } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type ClickRouter = (urlProps: string, state?: object, replace?: boolean) => void;

export const useRouteHandle = () => {
	const navigate: NavigateFunction = useNavigate();
	const onDoubleClickRouter: ClickRouter = useCallback((urlProps, state, replace) => {
		navigate(urlProps, { state, replace });
	}, []);
	const onClickRouter: ClickRouter = useCallback((urlProps, state, replace) => {
		navigate(urlProps, { state, replace });
	}, []);
	return { onDoubleClickRouter, onClickRouter };
};
