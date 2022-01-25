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
import { FetchMemoList } from "../../types/FetchMemoList";
import { DatePickerCalendar } from "./DatePickerCalendar";
import { RadioCategory } from "./RadioCategory";

type Props = {
	editMemo: FetchMemoList;
};

export const ModalEditor: VFC<Props> = memo((props: Props) => {
	const { editMemo } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const title = useInputForm();
	const description = useTextArea();
	const [category, setCategory] = useRecoilState(categoryState);
	const [date, setDate] = useRecoilState(dateState);
	console.log(date);
	const [isDisabledSaveButton, setIsDisabledSaveButton] = useState(true);
	const { editMemoList } = useMemoApi();

	useEffect(() => {
		title.value === `${editMemo.title}` &&
		description.value === `${editMemo.description}` &&
		category === `${editMemo.category}` &&
		date === `${editMemo.date}`
			? setIsDisabledSaveButton(true)
			: setIsDisabledSaveButton(false);
	}, [title.value, description.value, category, date]);

	useEffect(() => {
		if (isOpen) {
			title.setValue(`${editMemo.title}`);
			description.setValue(`${editMemo.description}`);
			setCategory(`${editMemo.category}`);
			setDate(`${editMemo.date}`);
		} else {
			title.setValue("");
			description.setValue("");
			setCategory(`${editMemo.category}`);
			setDate(`${editMemo.date}`);
		}
	}, [isOpen]);

	const onClickSaveButton = () => {
		console.log("savebuttonclick!");
		console.log(title.value);
		console.log(description.value);
		const body = { ...editMemo, title: title.value, description: description.value, category, date };
		delete body.id;
		editMemoList(editMemo.id, body);
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen}>edit</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Memo</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input defaultValue={editMemo.title} onChange={title.onChangeInputForm} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Date</FormLabel>
							<DatePickerCalendar defaultValue={editMemo.date} />
						</FormControl>
						<FormLabel>Category</FormLabel>
						<RadioCategory value={editMemo.category} />
						<FormLabel>Description</FormLabel>
						<Textarea defaultValue={editMemo.description} onChange={description.onChangeTextArea} />
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
