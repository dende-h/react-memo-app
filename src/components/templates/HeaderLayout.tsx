import { memo, ReactNode, VFC } from "react";

type Props = {
	children: ReactNode;
};

const HeaderLayout: VFC<Props> = memo((props: Props) => {
	const { children } = props;
	return (
		<>
			<h1>Header</h1>;{children}
		</>
	);
});
export default HeaderLayout;
