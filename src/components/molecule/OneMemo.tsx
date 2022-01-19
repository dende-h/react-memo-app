import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Stack,
	Divider,
	Flex,
	Spacer
} from "@chakra-ui/react";
import { VFC } from "react";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoCheckBox } from "../atoms/TodoCheckBox";

type Props = FetchMemoList;

export const OneMemo: VFC<Props> = (props: Props) => {
	const { title, date, description } = props;

	return (
		<>
			<Accordion allowMultiple>
				<AccordionItem>
					<AccordionButton bg={"yellow.100"} _hover={{ opacity: "0.8" }}>
						<Box flex={"1"}>{title}</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4} bg={"gray.50"} borderBottomRadius={"md"}>
						<Stack spacing={"4"}>
							<Flex>
								<Box>{date}</Box>
								<Spacer />
								<TodoCheckBox>Todoに追加</TodoCheckBox>
							</Flex>
							<Divider color={"brand.100"} />
							<Box>{description}</Box>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};
