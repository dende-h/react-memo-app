import { memo } from "react";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { TodoBoard } from "../organism/TodoBoard";

const TodoBoardPage = memo(() => {
	return (
		<>
			<HeaderLayout>
				<Flex>
					<MemoList />
					<TodoBoard />
				</Flex>
			</HeaderLayout>
		</>
	);
});
export default TodoBoardPage;
