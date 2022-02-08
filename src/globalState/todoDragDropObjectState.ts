import { atom } from "recoil";
import { todoDragDropObject } from "./todoDragDropObject";

export const todoDragDropObjectState = atom({
	key: "todo",
	default: todoDragDropObject
});
