import { Box, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { categoryIsTodoSelector } from "../../globalState/category/categoryIsTodoSelector";
import { CategoryIsTodo } from "../molecule/CategoryIsTodo";

export const CategoryTodoList: VFC = memo(() => {
	const categoryIsTodoList = useRecoilValue(categoryIsTodoSelector);

	return (
		<Box>
			<Divider />
			<Box>
				{categoryIsTodoList.map((item, index) => {
					const categoryIsTodo = categoryIsTodoList[index];
					return <CategoryIsTodo key={item.id} categoryIsTodo={categoryIsTodo} />;
				})}
			</Box>
		</Box>
	);
});
