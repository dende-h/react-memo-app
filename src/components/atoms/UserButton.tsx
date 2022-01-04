import { FcManager } from "react-icons/fc";
import { IconButton } from "@chakra-ui/react";
import { VFC } from "react";

export const HomeButton: VFC = () => {
	return <IconButton aria-label="UserLink" icon={<FcManager />}></IconButton>;
};
