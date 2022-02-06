import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoDragDrop } from "../../globalState/todoDragDrop";
import { todoDragDropObjectState } from "../../globalState/todoDragDropObjectState";
import { ColumnDropArea } from "../molecule/ColumnDropArea";

export const TodoBoard = memo(() => {
	const todoList = useRecoilValue<any>(todoDragDropObjectState);
	const [todoList2, setTodoList2] = useRecoilState(todoDragDrop);
	console.log(todoList2);
	const columns = todoList.dropZone;
	const columnsId = todoList.dropZone.map((item: any) => item.id);
	const onDragEnd = () => {
		console.log(todoList);
		setTodoList2(columnsId);
	};
	// 	//DragDropContextのpropsドラッグが終了したときの処理
	// 	const { destination, source, draggableId } = result;
	// 	if (!destination) {
	// 		return;
	// 	}
	// 	if (destination.droppableId === source.droppableId && destination.index === source.index) {
	// 		console.log(destination.droppableId);
	// 		console.log(source.droppableId);
	// 		return;
	// 	}

	// 	const start = todoList.dropZone[source.droppableId];
	// 	const finish = todoList.dropZone[destination.droppableId];

	// 	if (start === finish) {
	// 		const newTaskIds = Array.from(start.todoIds);
	// 		newTaskIds.splice(source.index, 1);
	// 		newTaskIds.splice(destination.index, 0, draggableId);

	// 		const newColumn = {
	// 			...start,
	// 			todoIds: newTaskIds
	// 		};

	// 		const newState = {
	// 			...todoList,
	// 			dropZone: {
	// 				...todoList.dropZone,
	// 				[newColumn.id]: newColumn
	// 			}
	// 		};

	// 		setTodoList(newState);
	// 		return;
	// 	}
	// 	const startTaskIds = Array.from(start.todoIds);
	// 	startTaskIds.splice(source.index, 1);
	// 	const newStart = {
	// 		...start,
	// 		todoIds: startTaskIds
	// 	};
	// 	const finishTaskIds = Array.from(finish.todoIds);
	// 	finishTaskIds.splice(destination.index, 0, draggableId);
	// 	const newFinish = {
	// 		...finish,
	// 		todoIds: finishTaskIds
	// 	};
	// 	const newState = {
	// 		...todoList,
	// 		dropZone: {
	// 			...todoList.dropZone,
	// 			[newStart.id]: newStart,
	// 			[newFinish.id]: newFinish
	// 		}
	// 	};
	// 	setTodoList(newState);
	// 	if (finish.id === "column-3") {
	// 		toast("Todo has started. Do your best!", {
	// 			icon: "👏"
	// 		});
	// 	} else if (finish.id === "column-4") {
	// 		toast("Todo is complete. Good job!", {
	// 			icon: "👏"
	// 		});
	// 	}
	// };
	return (
		<>
			<Box>
				<DragDropContext onDragEnd={onDragEnd}>
					<Box>
						{columns.map((item: any) => {
							//マップ関数で繰り返しコンポーネントをリターンしそれぞれのカラムを表示させる
							const task = item.todoIds.map((_: any, index: any) => todoList.dragItem[index]);
							//task=[todo-1{...},todo-2{},todo-3{},todo-4{...}] [] [] 3つの配列
							return <ColumnDropArea key={item.id} id={item.id} title={item.title} task={task} />;
						})}
					</Box>
				</DragDropContext>
			</Box>
		</>
	);
});
