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
	Spacer,
	HStack
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoCheckBox } from "./TodoCheckBox";
import { ModalEditor } from "./ModalEditor";
import { ModalValidate } from "./ModalValidate";

type Props = { categoryIsTodo: FetchMemoList };

export const CategoryIsTodo: VFC<Props> = memo((props: Props) => {
	const { categoryIsTodo } = props;

	return (
		<>
			<Accordion allowMultiple>
				<AccordionItem>
					<AccordionButton bg={"yellow.100"} _hover={{ opacity: "0.8" }}>
						<Box flex={"1"}>{categoryIsTodo.title}</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4} bg={"gray.50"} borderBottomRadius={"md"}>
						<Stack spacing={"4"}>
							<Flex>
								<Box>{categoryIsTodo.date}</Box>
								<Spacer />
								<TodoCheckBox oneMemo={categoryIsTodo} />
							</Flex>
							<Divider color={"brand.100"} />
							<Box>{categoryIsTodo.description}</Box>
							<HStack justify={"center"} spacing={"6"}>
								<ModalEditor editMemo={categoryIsTodo} />
								<ModalValidate deleteMemo={categoryIsTodo} />
							</HStack>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
});