import { selector } from "recoil";
import { memoListState } from "./memoListState";

export const categoryIsMemoState = selector({
	key: "categoryIsMemoState",
	get: ({ get }) => {
		const categoryIsMemo = get(memoListState).filter((item) => {
			return item.category === "メモ";
		});
		return categoryIsMemo;
	}
});
