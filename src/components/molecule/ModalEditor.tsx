import {
	Button,
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
	Divider,
	Stack
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../globalState/categoryState";
import { dateState } from "../../globalState/dateState";
import { useInputForm } from "../../hooks/useInputForm";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { useTextArea } from "../../hooks/useTextArea";
import { FetchMemoList } from "../../types/FetchMemoList";
import { CustomDatePickerCalendar } from "./CustomDatePickerCalendar";
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
				<ModalContent shadow={"dark-lg"}>
					<Stack>
						<ModalHeader fontFamily={"cursive"} fontSize={"xx-large"}>
							Edit Memo
						</ModalHeader>
						<Divider />
						<ModalCloseButton />
						<ModalBody pb={6} fontFamily={"mono"}>
							<Stack spacing={2}>
								<FormLabel margin={"unset"} fontSize={"xl"}>
									Title
								</FormLabel>
								<Input defaultValue={editMemo.title} onChange={title.onChangeInputForm} />
								<FormLabel fontSize={"xl"}>Date</FormLabel>
								<CustomDatePickerCalendar defaultValue={editMemo.date} />
								<FormLabel fontSize={"xl"}>Category</FormLabel>
								<RadioCategory value={editMemo.category} />
								<FormLabel fontSize={"xl"}>Description</FormLabel>
								<Textarea defaultValue={editMemo.description} onChange={description.onChangeTextArea} />
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
