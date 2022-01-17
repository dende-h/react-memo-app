import { memo } from "react";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";

const TopPage = memo(() => {
	return (
		<>
			<HeaderLayout>
				<MemoList />
			</HeaderLayout>
		</>
	);
});
export default TopPage;
