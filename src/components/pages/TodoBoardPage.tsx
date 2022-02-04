import { memo } from "react";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { todoDragDropObjectState } from "../../globalState/todoDragDropObjectState";
import { TodoBoard } from "../organism/TodoBoard";

const TodoBoardPage = memo(() => {
	const todoList = useRecoilValue(todoDragDropObjectState);
	console.log(todoList);
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
