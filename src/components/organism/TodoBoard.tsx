import { Box, HStack } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd";
import toast from "react-hot-toast";

import { useDragDropData } from "../../hooks/useDragDropData";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { ColumnDropArea } from "../molecule/ColumnDropArea";

type onDragEnd = (result: DropResult, provided: ResponderProvided) => void;

export const TodoBoard = memo(() => {
	const { todoList, setTodoList } = useDragDropData();
	const { loading } = useMemoApi();

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
			if (finish.id === "column-2") {
				toast("Todo has started. Do your best!", {
					icon: "👏"
				});
			}
			if (finish.id === "column-3") {
				toast("Todo is complete. Good job!", {
					icon: "👏"
				});
			}
		}
	};
	return (
		<>
			<Box w={"100%"} m={4}>
				<DragDropContext onDragEnd={onDragEnd}>
					<HStack spacing={6}>
						{columnIds.map((columnId) => {
							const columns = todoList.dropZone[columnId];
							const todoArray = columns.todoIds.map((todoId) => {
								if (todoId) {
									return todoList.dragItem[todoId];
								}
							});
							return (
								<ColumnDropArea
									key={columns.id}
									id={columns.id}
									title={columns.title}
									todoArray={todoArray}
									loading={loading}
								/>
							);
						})}
					</HStack>
				</DragDropContext>
			</Box>
		</>
	);
});
