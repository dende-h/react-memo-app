import { selector } from "recoil";
import { categoryIsTodoState } from "./categoryIsTodoState";
import { todoDragDropObjectState } from "./todoDragDropObjectState";

export const todoDragDropObject: any = selector({
	key: "todoDragDropObject",
	get: ({ get }) => {
		const todoDragItemIds = get(categoryIsTodoState).map((item) => {
			const dragItemId = item.id;
			return dragItemId;
		});

		const todoDragItemObjectArray = get(categoryIsTodoState).map((item) => {
			return { [`${item.id}`]: item };
		});

		console.log(todoDragItemObjectArray);

		const todoDragItemObjects = todoDragItemObjectArray.reduce((result, item) => {
			const key = Object.keys(item)[0]; //first property: a, b, c
			result[key] = item[key];
			return result;
		}, {});

		console.log(todoDragItemObjects);

		const todoDragDropObject = {
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
		return todoDragDropObject;
	}
});
