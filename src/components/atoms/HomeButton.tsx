import { FcHome } from "react-icons/fc";
import { IconButton } from "@chakra-ui/react";
import { VFC } from "react";

export const HomeButton: VFC = () => {
	return <IconButton aria-label="HomeLink" icon={<FcHome />}></IconButton>;
};
