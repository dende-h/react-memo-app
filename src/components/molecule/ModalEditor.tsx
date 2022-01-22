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
import React, { memo, useEffect, useState, VFC } from "react";
import { useInputForm } from "../../hooks/useInputForm";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { useTextArea } from "../../hooks/useTextArea";
import { FetchMemoList } from "../../types/FetchMemoList";
import { RadioCategory } from "./RadioCategory";

type Props = {
	editMemo: FetchMemoList;
};

export const ModalEditor: VFC<Props> = memo((props: Props) => {
	const { editMemo } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const title = useInputForm();
	const description = useTextArea();
	const [isDisabledSaveButton, setIsDisabledSaveButton] = useState(true);
	const { editMemoList } = useMemoApi();

	useEffect(() => {
		title.value === `${editMemo.title}` && description.value === `${editMemo.description}`
			? setIsDisabledSaveButton(true)
			: setIsDisabledSaveButton(false);
	}, [title.value, description.value]);

	useEffect(() => {
		if (isOpen) {
			title.setValue(`${editMemo.title}`);
			description.setValue(`${editMemo.description}`);
		} else {
			title.setValue("");
			description.setValue("");
		}
	}, [isOpen]);

	const onClickSaveButton = () => {
		console.log("savebuttonclick!");
		console.log(title.value);
		console.log(description.value);
		const body = { ...editMemo, title: title.value, description: description.value };
		delete body.id;
		editMemoList(editMemo.id, body);
		onClose();
	};

	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input defaultValue={editMemo.title} onChange={title.onChangeInputForm} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Date</FormLabel>
							<Input defaultValue={editMemo.date} />
						</FormControl>
						<FormLabel>Category</FormLabel>
						<RadioCategory />
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