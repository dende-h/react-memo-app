import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoDragDropObjectState } from "../../globalState/todoDragDropObjectState";
import { ColumnDropArea } from "../molecule/ColumnDropArea";

export const TodoBoard = memo(() => {
	const [todoList, setTodoList] = useRecoilState(todoDragDropObjectState);
	console.log(todoList);
	const columnIds = todoList.dropZoneOrder;

	const onDragEnd = (result: any) => {
		//DragDropContextのpropsドラッグが終了したときの処理
		const { destination, source, draggableId } = result;

		console.log(destination.droppableId); //移動後のカラムID
		console.log(source.droppableId); //移動前のカラムID
		console.log(destination); //移動後のdroppableIdとindexをプロパティにもつオブジェクト
		console.log(source); //移動前のdroppableIdとindexをプロパティにもつオブジェクト
		console.log(draggableId); //ドラッグされた要素のID
		const start = todoList.dropZone[source.droppableId];
		const finish = todoList.dropZone[destination.droppableId];

		console.log(start);
		console.log(finish);

		if (!destination) {
			return;
		}
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		if (start === finish) {
			const newTodoIds = Array.from(start.todoIds);
			console.log(newTodoIds);
			newTodoIds.splice(source.index, 1);
			newTodoIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				todoIds: newTodoIds
			};

			const newState = {
				...todoList,
				dropZone: {
					...todoList.dropZone,
					[newColumn.id]: newColumn
				}
			};
			console.log(newState);
			setTodoList(newState);
			return;
		}
		const startTodoIds = Array.from(start.todoIds);
		startTodoIds.splice(source.index, 1);
		const newStart = {
			...start,
			todoIds: startTodoIds
		};
		const finishTodoIds = Array.from(finish.todoIds);
		finishTodoIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			todoIds: finishTodoIds
		};
		const newState = {
			...todoList,
			dropZone: {
				...todoList.dropZone,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish
			}
		};
		setTodoList(newState);
		if (finish.id === "column-3") {
			toast("Todo has started. Do your best!", {
				icon: "👏"
			});
		} else if (finish.id === "column-4") {
			toast("Todo is complete. Good job!", {
				icon: "👏"
			});
		}
	};
	return (
		<>
			<Box>
				<DragDropContext onDragEnd={onDragEnd}>
					<Box>
						{columnIds.map((columnId: any) => {
							const columns = todoList.dropZone[columnId];
							const todos = columns.todoIds.map((todoId: any) => {
								return todoList.dragItem[todoId];
							});
							return <ColumnDropArea key={columns.id} id={columns.id} title={columns.title} todos={todos} />;
						})}
					</Box>
				</DragDropContext>
			</Box>
		</>
	);
});
