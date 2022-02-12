import { Box, Text, Divider, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoLabel } from "./TodoLabel";

type Props = {
	id: string;
	title: string;
	todoArray: (FetchMemoList | undefined)[];
};

export const ColumnDropArea: VFC<Props> = memo((props: Props) => {
	const { id, title, todoArray } = props;

	return (
		<>
			<Stack backgroundColor={"purple.50"} p={"4"} borderRadius={"md"} shadow={"lg"} minH="850px" w="450px">
				<Text as={"h1"} fontSize={"24px"} fontFamily={"cursive"}>
					{title}
				</Text>
				<Divider />
				<Droppable droppableId={id}>
					{(provided) => (
						<Box ref={provided.innerRef} {...provided.droppableProps}>
							{todoArray?.map(
								(item, index) => (
									<TodoLabel key={item?.id} todo={item} index={index} />
								) //taskとして受け取った配列をマップ関数で繰り返し呼び出すTodoTextコンポーネントに渡す
							)}
							{provided.placeholder}
						</Box>
					)}
				</Droppable>
			</Stack>
		</>
	);
});
