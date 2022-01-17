import { Box, Button, Divider, Flex, Heading, Input, Spinner, Stack } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { memo, useState, VFC } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { loginApi } from "../../env/api";
import { PasswordInput } from "../molecule/PasswordInput";

export const LoginForm: VFC = memo(() => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const authKey = {
		email,
		password
	};

	const navigate: NavigateFunction = useNavigate();
	const onClickLoginButton: React.MouseEventHandler<HTMLButtonElement> = async () => {
		try {
			setLoading(true);
			const result: AxiosResponse = await loginApi.post("/login", authKey);
			localStorage.setItem("authToken", result.data.access_token);
			console.log(result);
			navigate("/top", { state: result, replace: false });
		} catch (error) {
			setLoading(false);
			console.log(authKey);
			toast.error("ログインできません!");
		}
	};
	const onChangeInputEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setEmail(e.target.value);
	};
	const onChangeInputPassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPassword(e.target.value);
	};
	return (
		<>
			<Flex justify="center" minHeight="">
				<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading color="teal" as="h1" size="lg" textAlign="center">
						カレンダーメモアプリ
					</Heading>
					<Divider my={4} />
					<Stack spacing={6} py={4} px={10}>
						<Input bg="grey.200" placeholder="Enter email" type={"email"} value={email} onChange={onChangeInputEmail} />
						<PasswordInput
							bg="grey.200"
							placeholder="Enter Password"
							value={password}
							onChange={onChangeInputPassword}
						/>
						<Button colorScheme={"twitter"} outline="none" onClick={onClickLoginButton}>
							{loading ? (
								<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="sm" />
							) : (
								"ログイン"
							)}
						</Button>
					</Stack>
				</Box>
			</Flex>
		</>
	);
});
