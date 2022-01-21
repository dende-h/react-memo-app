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
	useDisclosure
} from "@chakra-ui/react";
import React, { VFC } from "react";
import { FetchMemoList } from "../../types/FetchMemoList";
import { TodoCheckBox } from "../atoms/TodoCheckBox";

type Props = {
	editMemo: FetchMemoList;
};

export const ModalEditor: VFC<Props> = (props: Props) => {
	const { editMemo } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef: any = React.useRef();
	const finalRef: any = React.useRef();

	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>
			<Button ml={4} ref={finalRef}>
				Ill receive focus on close
			</Button>

			<Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input ref={initialRef} value={editMemo.title} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Date</FormLabel>
							<Input value={editMemo.date} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Category</FormLabel>
							<Input value={editMemo.category} />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Must Todo</FormLabel>
							<TodoCheckBox>Todoに追加</TodoCheckBox>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Input value={editMemo.description} />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
