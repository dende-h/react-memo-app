/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilValue } from "recoil";
import { memoListState } from "../globalState/memo/memoListState";
import { FetchMemoList } from "../types/FetchMemoList";

type DragDropObject = {
	dragItem: {
		[todoId: string]: FetchMemoList;
	};
	dropZone: {
		[columnId: string]: {
			id: string;
			title: string;
			todoIds: (string | undefined)[] | never[];
		};
	};
	dropZoneOrder: string[];
};

const initialMemoData = useRecoilValue(memoListState);
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

export const todoDragDropObject: DragDropObject = {
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
