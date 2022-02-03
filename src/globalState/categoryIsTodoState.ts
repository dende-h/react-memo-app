import { selector } from "recoil";
import { memoListState } from "./memoListState";

export const categoryIsTodoState = selector({
	key: "categoryIsTodoState",
	get: ({ get }) => {
		const categoryIsTodo = get(memoListState).filter((item) => {
			return item.category === "TODO";
		});
		return categoryIsTodo;
	}
});
