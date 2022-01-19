import { Box, Flex } from "@chakra-ui/react";
import { VFC } from "react";
import { HomeButton } from "../atoms/HomeButton";
import { ChildrenProps } from "../../types/ChildrenProps";

export const HomeLinkIcon: VFC<ChildrenProps> = (props: ChildrenProps) => {
	const { children } = props;

	return (
		<Box>
			<Flex>
				<HomeButton />
				{children}
			</Flex>
		</Box>
	);
};
