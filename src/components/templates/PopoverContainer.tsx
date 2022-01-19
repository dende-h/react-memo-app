import { memo, ReactNode, VFC } from "react";
import {
	Button,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	UsePopoverProps
} from "@chakra-ui/react";

type Props = {
	children: ReactNode;
	popoverHeaderText?: string;
	trigger: UsePopoverProps["trigger"];
	buttonName?: string;
	atoms?: JSX.Element;
};

export const PopoverContainer: VFC<Props> = memo((props: Props) => {
	const { children, popoverHeaderText, trigger, buttonName = "trigger", atoms } = props;

	return (
		<Popover trigger={trigger}>
			<PopoverTrigger>{atoms ? <a>{atoms}</a> : <Button colorScheme={"teal"}>{buttonName}</Button>}</PopoverTrigger>
			<PopoverContent>
				<PopoverHeader fontWeight="bold">{popoverHeaderText}</PopoverHeader>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody>{children}</PopoverBody>
			</PopoverContent>
		</Popover>
	);
});
