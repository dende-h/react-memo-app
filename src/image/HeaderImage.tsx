import BackgroundImage from "./business-pug-working-on-laptop.jpg";
import { Image } from "@chakra-ui/react";
export const HeaderImage = () => {
	return <Image src={BackgroundImage} fit="cover" />;
};
