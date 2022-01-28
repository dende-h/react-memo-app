import {
	Button,
	Divider,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	useDisclosure,
	Stack
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../globalState/categoryState";
import { dateState } from "../../globalState/dateState";
import { useInputForm } from "../../hooks/useInputForm";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { useTextArea } from "../../hooks/useTextArea";
import { CustomDatePickerCalendar } from "./CustomDatePickerCalendar";
import { RadioCategory } from "./RadioCategory";
import format from "date-fns/format";

export const ModalInput: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const title = useInputForm();
	const description = useTextArea();
	const [category, setCategory] = useRecoilState(categoryState);
	console.log(category);
	const [date, setDate] = useRecoilState(dateState);
	const [isDisabledSaveButton, setIsDisabledSaveButton] = useState(true);
	const { inputMemoList } = useMemoApi();

	useEffect(() => {
		title.value === "" || description.value === "" ? setIsDisabledSaveButton(true) : setIsDisabledSaveButton(false);
	}, [title.value, description.value]);

	useEffect(() => {
		if (isOpen === false) {
			title.setValue("");
			description.setValue("");
			setCategory("メモ");
			setDate(format(new Date(), "yyyy/MM/dd"));
		}
	}, [isOpen]);

	const onClickSaveButton = () => {
		const body = { title: title.value, description: description.value, category, date };
		inputMemoList(body);
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen}>+</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent shadow={"dark-lg"}>
					<Stack>
						<ModalHeader fontFamily={"cursive"} fontSize={"xx-large"}>
							Input New Memo
						</ModalHeader>
						<Divider />
						<ModalCloseButton />
						<ModalBody pb={6} fontFamily={"mono"}>
							<Stack spacing={2}>
								<FormLabel margin={"unset"} fontSize={"xl"}>
									Title
								</FormLabel>
								<Input placeholder="Title" onChange={title.onChangeInputForm} />
								<FormLabel fontSize={"xl"}>Date</FormLabel>
								<CustomDatePickerCalendar defaultValue={date} />
								<FormLabel fontSize={"xl"}>Category</FormLabel>
								<RadioCategory value={"メモ"} />
								<FormLabel fontSize={"xl"}>Description</FormLabel>
								<Textarea placeholder="Description" onChange={description.onChangeTextArea} />
							</Stack>
						</ModalBody>
					</Stack>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClickSaveButton} isDisabled={isDisabledSaveButton}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
});
