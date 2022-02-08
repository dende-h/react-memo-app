import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoLabel } from "./TodoLabel";

type Props = {
	id: string;
	title: string;
	todos: FetchMemoList[];
};

export const ColumnDropArea: VFC<Props> = memo((props: Props) => {
	const { id, title, todos } = props;

	return (
		<>
			<Box>
				<Text>{title}</Text>
				<Droppable droppableId={id}>
					{(provided) => (
						<Box ref={provided.innerRef} {...provided.droppableProps}>
							{todos.map(
								(item, index) => (
									<TodoLabel key={item.id} todo={item} index={index} />
								) //taskとして受け取った配列をマップ関数で繰り返し呼び出すTodoTextコンポーネントに渡す
							)}
							{provided.placeholder}
						</Box>
					)}
				</Droppable>
			</Box>
		</>
	);
});
