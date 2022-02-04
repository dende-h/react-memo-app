import { selector } from "recoil";
import { categoryIsTodoState } from "./categoryIsTodoState";

export const todoDragDropObjectState = selector({
	key: "todoDragDropObjectState",
	get: ({ get }) => {
		const todoDragItemIds = get(categoryIsTodoState).map((item) => {
			const dragItemId = item.id;
			return dragItemId;
		});
		const todoDragItemObjects = get(categoryIsTodoState).map((item) => item);

		const todoDragDropObject = {
			dragItem: todoDragItemObjects,
			dropZone: [
				{ id: "column-1", title: "Todo", todoIds: todoDragItemIds },
				{
					id: "column-2",
					title: "In Progress",
					todoIds: []
				},
				{ id: "column-3", title: "Completed", todoIds: [] }
			]
		};
		return todoDragDropObject;
	}
});
