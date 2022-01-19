import { Checkbox } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
	children: ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isChecked?: boolean;
};

export const TodoCheckBox: VFC<Props> = (props: Props) => {
	const { children, onChange, isChecked } = props;
	return (
		<Checkbox colorScheme="green" onChange={onChange} isChecked={isChecked}>
			{children}
		</Checkbox>
	);
};
