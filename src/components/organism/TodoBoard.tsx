import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { todoDragDropObjectState } from "../../globalState/board/todoDragDropObjectState";
import { ColumnDropArea } from "../molecule/ColumnDropArea";

type onDragEnd = (result: DropResult, provided: ResponderProvided) => void;

export const TodoBoard = memo(() => {
	const [todoList, setTodoList] = useRecoilState(todoDragDropObjectState);
	console.log(todoList);
	const columnIds = todoList.dropZoneOrder;

	const onDragEnd: onDragEnd = (result) => {
		//DragDropContextのpropsドラッグが終了したときの処理
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination) {
			const start = todoList.dropZone[source.droppableId];
			const finish = todoList.dropZone[destination.droppableId];
			console.log(destination.droppableId); //移動後のカラムID
			console.log(source.droppableId); //移動前のカラムID
			console.log(destination); //移動後のdroppableIdとindexをプロパティにもつオブジェクト
			console.log(source); //移動前のdroppableIdとindexをプロパティにもつオブジェクト
			console.log(draggableId); //ドラッグされた要素のID

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
		}
	};
	return (
		<>
			<Box>
				<DragDropContext onDragEnd={onDragEnd}>
					<Box>
						{columnIds.map((columnId) => {
							const columns = todoList.dropZone[columnId];

							const todoArray = columns.todoIds.map((todoId) => {
								if (todoId) {
									return todoList.dragItem[todoId];
								}
							});
							return <ColumnDropArea key={columns.id} id={columns.id} title={columns.title} todoArray={todoArray} />;
						})}
					</Box>
				</DragDropContext>
			</Box>
		</>
	);
});
