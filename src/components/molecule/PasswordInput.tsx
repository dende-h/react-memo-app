import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState, VFC } from "react";

type Props = {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
};
export const PasswordInput: VFC<Props> = (props: Props) => {
	const { value, onChange, placeholder } = props;
	const [isShow, setIsShow] = useState<boolean>(false);
	const handleClick = () => setIsShow(!isShow);

	return (
		<>
			<InputGroup size="md">
				<Input
					pr="4.5rem"
					value={value}
					type={isShow ? "text" : "password"}
					placeholder={placeholder}
					onChange={onChange}
				/>
				<InputRightElement width="4.5rem">
					<Button h="1.75rem" size="sm" onClick={handleClick}>
						{isShow ? "Hide" : "Show"}
					</Button>
				</InputRightElement>
			</InputGroup>
		</>
	);
};
