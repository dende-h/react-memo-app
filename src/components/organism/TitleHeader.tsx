import { Box, Flex, Heading } from "@chakra-ui/react";
import { VFC } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";
import BackgroundImage from "../../image/business-pug-working-on-laptop.jpg";
import { ReadMe } from "../molecule/ReadMe";
type Props = ChildrenProps;

export const TitleHeader: VFC<Props> = (props: Props) => {
	const { children } = props;
	console.log(BackgroundImage);
	return (
		<Box>
			<Box
				backgroundImage={`url(${BackgroundImage})`}
				backgroundPosition="bottom"
				backgroundSize="cover"
				textAlign={"center"}
				w="100%"
				h={["1000px", "1000px", "750px"]}
			>
				<Flex>
					<Box>
						<Heading color="teal" as="h1" size="lg" p={10} fontSize={["30px", "40px", "60px"]}>
							カレンダーメモアプリ
						</Heading>
						<Box p={5}>{children}</Box>
						<Box>
							<ReadMe />
						</Box>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};
