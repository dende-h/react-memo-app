import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Droppable } from "react-beautiful-dnd";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoLabel } from "./TodoLabel";

type Props = {
	id: string;
	title: string;
	task: FetchMemoList[];
};

export const ColumnDropArea: VFC<Props> = memo((props: Props) => {
	const { id, title, task } = props;

	return (
		<>
			<Box>
				<Text>{title}</Text>
				<Droppable droppableId={id}>
					{(provided, snapshot) => (
						<Box ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
							{task.map(
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
