import { Switch } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = { onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void };
export const SlideSwitch: VFC<Props> = memo((props: Props) => {
	const { onChange } = props;
	return <Switch onChange={onChange} size="md" />;
});
