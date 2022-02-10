import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FetchMemoList } from "../../types/FetchMemoList";

type Props = {
	todo: FetchMemoList | undefined;
	index: number;
};

export const TodoLabel: VFC<Props> = memo((props: Props) => {
	const { todo, index } = props;

	return todo ? (
		<Draggable draggableId={todo.id} index={index}>
			{(provided) => (
				<Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					{todo?.title}
				</Box>
			)}
		</Draggable>
	) : (
		<></>
	);
});
