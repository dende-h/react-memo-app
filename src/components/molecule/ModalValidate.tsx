import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";

type Props = {
	deleteMemo: FetchMemoList;
};

export const ModalValidate: VFC<Props> = memo((props: Props) => {
	const { deleteMemo } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { deleteMemoList } = useMemoApi();
	const onClickDeleteButton = () => {
		deleteMemoList(deleteMemo.id);
	};

	return (
		<>
			<Button onClick={onOpen}>delete</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>本当に削除しますか？</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>削除後は元に戻せません!</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClickDeleteButton}>
							delete
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
});
