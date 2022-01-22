import { Radio } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = { children: ReactNode; value: string | number | undefined };

export const RadioAtoms: VFC<Props> = (props: Props) => {
	const { children, value } = props;
	return (
		<>
			<Radio value={value}>{children}</Radio>
		</>
	);
};
