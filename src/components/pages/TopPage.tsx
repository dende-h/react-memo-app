import { memo } from "react";
import { Calendar } from "../organism/Calendar";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";

const TopPage = memo(() => {
	return (
		<>
			<HeaderLayout>
				<Flex>
					<MemoList />
					<Calendar />
				</Flex>
			</HeaderLayout>
		</>
	);
});
export default TopPage;
