import {
	BackgroundProps,
	BorderProps,
	Button,
	ButtonOptions,
	CSSObject,
	EffectProps,
	SpaceProps,
	ThemingProps
} from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
	children: ReactNode;
	mx?: SpaceProps["mx"];
	my?: SpaceProps["my"];
	p?: SpaceProps["p"];
	isDisabled?: ButtonOptions["isDisabled"];
	bgColor?: BackgroundProps["bgColor"];
	borderRadius?: BorderProps["borderRadius"];
	size?: ThemingProps<"Button">["size"];
	shadow?: EffectProps["shadow"];
	_hover?: CSSObject | undefined;
};

export const PrimaryButton: VFC<Props> = memo((props: Props) => {
	const { children, mx, my, borderRadius, p, bgColor, isDisabled, shadow, size, _hover } = props;
	return (
		<Button
			mx={mx}
			my={my}
			borderRadius={borderRadius}
			p={p}
			bgColor={bgColor}
			isDisabled={isDisabled}
			shadow={shadow}
			size={size}
			_hover={_hover}
		>
			{children}
		</Button>
	);
});
