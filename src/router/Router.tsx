import { ReactElement, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import AppIntroduction from "../components/pages/AppIntroduction";
import { Blank } from "../components/pages/Blank";
import { Login } from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import TopPage from "../components/pages/TopPage";

export const Router: VFC = (): ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<AppIntroduction />}></Route>
			<Route path="/login" element={<Login />} />
			<Route path="/top" element={<TopPage />} />
			<Route path="/blank" element={<Blank />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
