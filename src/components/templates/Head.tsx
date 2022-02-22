import { VFC } from "react";
import { Helmet } from "react-helmet";
import { ChildrenProps } from "../../types/ChildrenProps";

type Props = ChildrenProps;

export const Head: VFC<Props> = (props: Props) => {
	const { children } = props;
	return (
		<>
			<Helmet>{children}</Helmet>
		</>
	);
};
