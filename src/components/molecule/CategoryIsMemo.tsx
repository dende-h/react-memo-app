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

type Props = { categoryIsMemo: FetchMemoList };

export const CategoryIsMemo: VFC<Props> = memo((props: Props) => {
	const { categoryIsMemo } = props;

	return (
		<>
			<Accordion allowMultiple>
				<AccordionItem>
					<AccordionButton bg={"yellow.100"} _hover={{ opacity: "0.8" }}>
						<Box flex={"1"}>{categoryIsMemo.title}</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4} bg={"gray.50"} borderBottomRadius={"md"}>
						<Stack spacing={"4"}>
							<Flex>
								<Box>{categoryIsMemo.date}</Box>
								<Spacer />
								<TodoCheckBox oneMemo={categoryIsMemo} />
							</Flex>
							<Divider color={"brand.100"} />
							<Box>{categoryIsMemo.description}</Box>
							<HStack justify={"center"} spacing={"6"}>
								<ModalEditor editMemo={categoryIsMemo} />
								<ModalValidate deleteMemo={categoryIsMemo} />
							</HStack>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
});
