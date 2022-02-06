import { atom } from "recoil";
import { todoDragDropObjectState } from "./todoDragDropObjectState";

export const todoDragDrop = atom({
	key: "todo",
	default: todoDragDropObjectState
});
