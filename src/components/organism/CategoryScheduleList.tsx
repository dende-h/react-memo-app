import { Box, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { categoryIsScheduleSelector } from "../../globalState/category/categoryIsScheduleSelector";
import { CategoryIsSchedule } from "../molecule/CategoryIsSchedule";

export const CategoryScheduleList: VFC = memo(() => {
	const categoryIsScheduleList = useRecoilValue(categoryIsScheduleSelector);

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
