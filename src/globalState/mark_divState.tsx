import { selector } from "recoil";
import { memoListState } from "./memoListState";

export const mark_divState = selector({
	key: "mark_divState",
	get: ({ get }) => {
		const memoList = get(memoListState);
		const mark_divNum = memoList.map((item) => item.mark_div);
		return {
			mark_divNum
		};
	}
});
