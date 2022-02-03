import { Box, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { categoryIsMemoState } from "../../globalState/categoryIsMemoState";
import { CategoryIsMemo } from "../molecule/CategoryIsMemo";

export const CategoryMemoList: VFC = memo(() => {
	const categoryIsMemoList = useRecoilValue(categoryIsMemoState);

	return (
		<Box>
			<Divider />
			<Box>
				{categoryIsMemoList.map((item, index) => {
					const categoryIsMemo = categoryIsMemoList[index];
					return <CategoryIsMemo key={item.id} categoryIsMemo={categoryIsMemo} />;
				})}
			</Box>
		</Box>
	);
});
