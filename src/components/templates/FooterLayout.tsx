import { memo, VFC } from "react";
import { HomeButton } from "../atoms/HomeButton";
import { ChildrenProps } from "../../types/ChildrenProps";
import { HomeLinkIcon } from "../molecule/HomeLinkIcon";

const FooterLayout: VFC<ChildrenProps> = memo((props: ChildrenProps) => {
	const { children } = props;
	return (
		<>
			{children}
			<HomeButton />
			<HomeLinkIcon>ホームへ戻る</HomeLinkIcon>
		</>
	);
});
export default FooterLayout;
