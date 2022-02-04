import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import { todoDragDropObjectState } from "../../globalState/todoDragDropObjectState";
import { ColumnDropArea } from "../molecule/ColumnDropArea";

export const TodoBoard = memo(() => {
	const todoList = useRecoilValue(todoDragDropObjectState);
	const onDragEnd = () => {
		console.log(todoList);
	};

	const columns = todoList.dropZone;

	return (
		<>
			<Box>
				<DragDropContext onDragEnd={onDragEnd}>
					<Box>
						{columns.map((item) => {
							//マップ関数で繰り返しコンポーネントをリターンしそれぞれのカラムを表示させる
							const task = item.todoIds.map((_, index) => todoList.dragItem[index]);
							//task=[todo-1{...},todo-2{},todo-3{},todo-4{...}] [] [] 3つの配列
							return <ColumnDropArea key={item.id} id={item.id} title={item.title} task={task} />;
						})}
					</Box>
				</DragDropContext>
			</Box>
		</>
	);
});
