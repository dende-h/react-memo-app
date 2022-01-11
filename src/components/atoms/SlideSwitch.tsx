import { Switch } from "@chakra-ui/react";
import { useState } from "react";

export const SlideSwitch = () => {
	const [isSwitching, setIsSwitching] = useState<boolean>(false);
	const onChangedSwitch = async () => {
		setIsSwitching(!isSwitching);
		await setTimeout(() => {
			setIsSwitching(!isSwitching), 1000;
		});
	};

	return <Switch onChange={onChangedSwitch} size="md" />;
};
