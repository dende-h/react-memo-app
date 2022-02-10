import { Box, Divider } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { categoryIsMemoSelector } from "../../globalState/category/categoryIsMemoSelector";
import { FetchMemoList } from "../../types/FetchMemoList";
import { CategoryIsMemo } from "../molecule/CategoryIsMemo";

export const CategoryMemoList: VFC = memo(() => {
	const categoryIsMemoList = useRecoilValue(categoryIsMemoSelector);

	return (
		<Box>
			<Divider />
			<Box>
				{categoryIsMemoList.map((item: FetchMemoList, index: number) => {
					const categoryIsMemo = categoryIsMemoList[index];
					return <CategoryIsMemo key={item.id} categoryIsMemo={categoryIsMemo} />;
				})}
			</Box>
		</Box>
	);
});
