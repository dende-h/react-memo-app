import { selector } from "recoil";
import { memoListState } from "./memoListState";

export const categoryIsScheduleState = selector({
	key: "categoryIsScheduleState",
	get: ({ get }) => {
		const categoryIsSchedule = get(memoListState).filter((item) => {
			return item.category === "スケジュール";
		});
		return categoryIsSchedule;
	}
});
