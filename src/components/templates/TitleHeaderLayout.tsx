import { memo, VFC } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";
import { TitleHeader } from "../organism/TitleHeader";

type Props = ChildrenProps;

const TitleHeaderLayout: VFC<Props> = memo((props: Props) => {
	const { children } = props;
	return (
		<>
			<TitleHeader>{children}</TitleHeader>
		</>
	);
});
export default TitleHeaderLayout;
