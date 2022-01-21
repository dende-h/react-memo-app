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
	Button,
	HStack
} from "@chakra-ui/react";
import { useEffect, useState, VFC } from "react";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoCheckBox } from "../atoms/TodoCheckBox";
import { ModalEditor } from "./ModalEditor";

type Props = { oneMemo: FetchMemoList };

export const OneMemo: VFC<Props> = (props: Props) => {
	const [isChecked, setIsChecked] = useState(false);

	const { oneMemo } = props;
	const { editMemoList } = useMemoApi();

	useEffect(() => {
		oneMemo.mark_div === 1 ? setIsChecked(true) : setIsChecked(false);
	}, []);

	const onChangeCheckBox: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined = () => {
		if (oneMemo.mark_div === 1) {
			const editOneMemo: FetchMemoList = { ...oneMemo, mark_div: 0 };
			delete editOneMemo.id;
			console.log("1→0");
			editMemoList(oneMemo.id, editOneMemo);
			setIsChecked(false);
		} else if (oneMemo.mark_div === 0) {
			const editOneMemo: FetchMemoList = { ...oneMemo, mark_div: 1 };
			delete editOneMemo.id;
			console.log("0→1");
			editMemoList(oneMemo.id, editOneMemo);
			setIsChecked(true);
		}
	};

	return (
		<>
			<Accordion allowMultiple>
				<AccordionItem>
					<AccordionButton bg={"yellow.100"} _hover={{ opacity: "0.8" }}>
						<Box flex={"1"}>{oneMemo.title}</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4} bg={"gray.50"} borderBottomRadius={"md"}>
						<Stack spacing={"4"}>
							<Flex>
								<Box>{oneMemo.date}</Box>
								<Spacer />
								<TodoCheckBox onChange={onChangeCheckBox} isChecked={isChecked}>
									Todoに追加
								</TodoCheckBox>
							</Flex>
							<Divider color={"brand.100"} />
							<Box>{oneMemo.description}</Box>
							<HStack justify={"center"}>
								<Button>edit</Button>
								<Button>delete</Button>
								<ModalEditor editMemo={oneMemo} />
							</HStack>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};
