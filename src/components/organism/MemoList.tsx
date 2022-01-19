import { Box, Divider, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { OneMemo } from "../molecule/OneMemo";
import { useMemoApi } from "../../hooks/useMemoListApi";

export const MemoList = () => {
	const { fetchMemoList, memoList } = useMemoApi();

	useEffect(() => {
		fetchMemoList();
	}, []);

	return (
		<>
			<Box bg="white" textAlign={"center"} w="sm" minHeight={"xl"} m="4" borderRadius={"lg"} p={"4"}>
				<Stack spacing={"2"}>
					<Box as={"h1"} fontFamily={"fantasy"} fontSize={"xl"}>
						MemoList
					</Box>
					<Divider />
					<Box>
						{memoList.map((item) => {
							return <OneMemo key={item.id} title={item.title} date={item.date} description={item.description} />;
						})}
					</Box>
				</Stack>
			</Box>
		</>
	);
};
