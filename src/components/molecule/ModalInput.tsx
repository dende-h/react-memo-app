import {
	Button,
	FormControl,
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
	useDisclosure
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../globalState/categoryState";
import { dateState } from "../../globalState/dateState";
import { useInputForm } from "../../hooks/useInputForm";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { useTextArea } from "../../hooks/useTextArea";
import { DatePickerCalendar } from "./DatePickerCalendar";
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

	const initialDate = new Date();
	setDate(format(initialDate, "yyyy/MM/dd"));

	useEffect(() => {
		title.value === "" || description.value === "" ? setIsDisabledSaveButton(true) : setIsDisabledSaveButton(false);
	}, [title.value, description.value]);

	useEffect(() => {
		if (isOpen === false) {
			title.setValue("");
			description.setValue("");
			setCategory("メモ");
			setDate("");
		}
	}, [isOpen]);

	const onClickSaveButton = () => {
		console.log("savebuttonclick!");
		console.log(title.value);
		console.log(description.value);
		const body = { title: title.value, description: description.value, category, date };
		inputMemoList(body);
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen}>input new memo</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input placeholder="Title" onChange={title.onChangeInputForm} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Date</FormLabel>
							<DatePickerCalendar defaultValue={date} />
						</FormControl>
						<FormLabel>Category</FormLabel>
						<RadioCategory value={"メモ"} />
						<FormLabel>Description</FormLabel>
						<Textarea placeholder="Description" onChange={description.onChangeTextArea} />
					</ModalBody>
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
