import { FcTodoList } from "react-icons/fc";
import { IconButton } from "@chakra-ui/react";
import { VFC } from "react";

export const HomeButton: VFC = () => {
	return <IconButton aria-label="TodoLink" icon={<FcTodoList />}></IconButton>;
};
