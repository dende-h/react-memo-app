import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
	todo: any;
	index: number;
};

export const TodoLabel: VFC<Props> = memo((props: Props) => {
	const { todo, index } = props;

	return (
		<Draggable draggableId={todo.id} index={index}>
			{(provided) => (
				<Box {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
					{todo.title}
				</Box>
			)}
		</Draggable>
	);
});
