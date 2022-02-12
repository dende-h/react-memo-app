import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoDragDropObjectState } from "../globalState/board/todoDragDropObjectState";
import { memoListState } from "../globalState/memo/memoListState";
import { DragDropObjectType } from "../types/DragDropObjectType";
import { FetchMemoList } from "../types/FetchMemoList";

type DragDropObject = DragDropObjectType;

export const useDragDropData = () => {
	console.log("これが動いてる？");
	const [todoList, setTodoList] = useRecoilState(todoDragDropObjectState);
	const setApiData = useCallback((initialMemoData: FetchMemoList[]) => {
		console.log("setAPI動いた");
		const categoryIsTodoList = initialMemoData.filter((item) => {
			return item.category === "TODO";
		});

		const todoDragItemIds = categoryIsTodoList.map((item) => {
			const dragItemId = item.id;
			return dragItemId;
		});

		const todoDragItemObjectArray = categoryIsTodoList.map((item) => {
			return { [`${item.id}`]: item };
		});

		console.log(todoDragItemObjectArray);

		const todoDragItemObjects = todoDragItemObjectArray.reduce((result, item) => {
			const key = Object.keys(item)[0]; //first property: a, b, c
			result[key] = item[key];
			return result;
		}, {});

		console.log(todoDragItemObjects);

		const todoDragDropObject: DragDropObject = {
			dragItem: todoDragItemObjects,
			dropZone: {
				"column-1": { id: "column-1", title: "Todo", todoIds: todoDragItemIds },
				"column-2": {
					id: "column-2",
					title: "In Progress",
					todoIds: []
				},
				"column-3": { id: "column-3", title: "Completed", todoIds: [] }
			},
			dropZoneOrder: ["column-1", "column-2", "column-3"]
		};

		setTodoList(todoDragDropObject);
	}, []);

	return { todoList, setApiData, setTodoList };
};
