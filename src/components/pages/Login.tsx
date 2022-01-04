import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { memo, useState, VFC } from "react";

export const Login: VFC = memo(() => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const API_BASEURL = "https://raisetech-memo-api.herokuapp.com/api";
	const headers = { "Content-Type": "application/json" };
	const authKey = {
		email,
		password
	};

	const onClickLoginButton: React.MouseEventHandler<HTMLButtonElement> = async () => {
		try {
			const result = await axios.post(API_BASEURL + "/login", authKey, { headers });
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	const onChangeInputEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value);
	};
	const onChangeInputPassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value);
	};
	return (
		<Flex align="center" justify="center" height="100vh">
			<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
				<Heading as="h1" size="lg" textAlign="center">
					カレンダーメモアプリ
				</Heading>
				<Divider my={4} />
				<Stack spacing={6} py={4} px={10}>
					<Input placeholder="E-mail" value={email} onChange={onChangeInputEmail} />
					<Input placeholder="Password" value={password} onChange={onChangeInputPassword} />
					<Button onClick={onClickLoginButton}>ログイン</Button>
				</Stack>
			</Box>
		</Flex>
	);
});
