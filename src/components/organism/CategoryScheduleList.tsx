import { Box, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { categoryIsScheduleState } from "../../globalState/categoryIsScheduleState";
import { CategoryIsSchedule } from "../molecule/CategoryIsSchedule";

export const CategoryScheduleList: VFC = memo(() => {
	const categoryIsScheduleList = useRecoilValue(categoryIsScheduleState);

	return (
		<Box>
			<Divider />
			<Box>
				{categoryIsScheduleList.map((item, index) => {
					const categoryIsSchedule = categoryIsScheduleList[index];
					return <CategoryIsSchedule key={item.id} categoryIsSchedule={categoryIsSchedule} />;
				})}
			</Box>
		</Box>
	);
});
