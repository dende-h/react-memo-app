import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Stack,
	Divider,
	HStack
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FetchMemoList } from "../../types/FetchMemoList";
import { ModalEditor } from "./ModalEditor";
import { ModalValidate } from "./ModalValidate";

type Props = { oneMemo: FetchMemoList };

export const OneMemo: VFC<Props> = memo((props: Props) => {
	const { oneMemo } = props;

	return (
		<>
			<Accordion allowMultiple>
				<AccordionItem fontFamily={"cursive"}>
					<AccordionButton bg={"yellow.100"} _hover={{ opacity: "0.8" }}>
						<Box flex={"1"}>{oneMemo.title}</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4} bg={"gray.50"} borderBottomRadius={"md"}>
						<Stack spacing={"4"}>
							<Box>{oneMemo.date}</Box>
							<Divider color={"brand.100"} />
							<Box>{oneMemo.description}</Box>
							<HStack justify={"center"} spacing={"6"}>
								<ModalEditor editMemo={oneMemo} />
								<ModalValidate deleteMemo={oneMemo} />
							</HStack>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
});
