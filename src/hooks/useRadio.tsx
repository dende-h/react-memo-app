import { useState } from "react";

type Props = {
	value?: string;
};

export const useRadio = () => {
	const [radioValue, setRadioValue] = useState<string | undefined>("");
	const onChangeRadio = (props: Props) => {
		const { value } = props;
		setRadioValue(value);
		console.log(radioValue);
	};
	return { radioValue, setRadioValue, onChangeRadio };
};
