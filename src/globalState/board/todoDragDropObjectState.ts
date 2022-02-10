import { atom } from "recoil";
import { todoDragDropObject } from "../../initialData/initialDragDropObjectData";

export const todoDragDropObjectState = atom({
	key: "todoDragDropObjectState",
	default: todoDragDropObject
});
