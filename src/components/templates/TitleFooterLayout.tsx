import { memo, VFC } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";
import { TitleFooter } from "../organism/TitleFooter";

type Props = ChildrenProps;

const TitleFooterLayout: VFC<Props> = memo((props: Props) => {
	const { children } = props;
	return (
		<>
			{children}
			<TitleFooter />
		</>
	);
});
export default TitleFooterLayout;
