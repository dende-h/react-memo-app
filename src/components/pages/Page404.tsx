import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";

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
			<a href="https://jp.freepik.com/vectors/computer">Jcomp - jp.freepik.com によって作成された computer ベクトル</a>
			<Box>
				<Link to={"/top"}>Topへ戻る</Link>
			</Box>
		</Box>
	);
});
export default Page404;
