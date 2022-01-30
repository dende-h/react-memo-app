import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms/PrimaryButton";

const Page404 = memo(() => {
	return (
		<Box
			backgroundImage={`url(${process.env.PUBLIC_URL}/Na_June_67.jpg)`}
			backgroundPosition="bottom"
			backgroundSize="cover"
			textAlign={"center"}
			w="100%"
			h={"1100px"}
		>
			<Box>
				<a href="https://jp.freepik.com/vectors/computer">
					Jcomp - jp.freepik.com によって作成された computer ベクトル
				</a>
			</Box>
			<Box>
				<PrimaryButton bgColor={"cyan.600"} color={"white"}>
					<Link to={"/"}>Topへ戻る</Link>
				</PrimaryButton>
			</Box>
		</Box>
	);
});
export default Page404;
