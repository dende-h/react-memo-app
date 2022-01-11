import { ReactElement, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Blank } from "../components/pages/Blank";
import { Login } from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import TopPage from "../components/pages/TopPage";
import FooterLayout from "../components/templates/FooterLayout";
import TitleHeaderLayout from "../components/templates/TitleHeaderLayout";
//import HeaderLayout from "../components/templates/HeaderLayout";

export const Router: VFC = (): ReactElement => {
	return (
		<Routes>
			<Route
				path="/login"
				element={
					<TitleHeaderLayout>
						<Login />
					</TitleHeaderLayout>
				}
			/>
			<Route
				path="/top"
				element={
					<FooterLayout>
						<TopPage />
					</FooterLayout>
				}
			/>
			<Route path="/blank" element={<Blank />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
