import { ReactElement, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AppIntroductionPage } from "../components/pages/AppIntroductionPage";
import { Blank } from "../components/pages/Blank";
import { Login } from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import TodoBoardPage from "../components/pages/TodoBoardPage";
import TopPage from "../components/pages/TopPage";
import { isAuthenticated } from "../globalState/isAuthenticated";

export const Router: VFC = (): ReactElement => {
	const isAuth = useRecoilValue(isAuthenticated);
	return (
		<Routes>
			<Route path="/" element={<AppIntroductionPage />} />
			<Route path="/login" element={isAuth ? <TopPage /> : <Login />} />
			<Route path="/top" element={isAuth ? <TopPage /> : <Login />} />
			<Route path="/board" element={isAuth ? <TodoBoardPage /> : <Login />} />
			<Route path="/blank" element={<Blank />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
