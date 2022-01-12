import { Box, Button, Divider, Flex, Heading, Input, Spinner, Stack } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { memo, useState, VFC } from "react";
import toast from "react-hot-toast";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { PasswordInput } from "../molecule/PasswordInput";

export const LoginForm: VFC = memo(() => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const API_BASEURL = "https://raisetech-memo-api.herokuapp.com/api";
	const headers = { "Content-Type": "application/json" };
	const authKey = {
		email,
		password
	};
	const { state } = useLocation();
	console.log(state);
	// const [isSurprise,setIsSurprise] = useState<boolean>(false)
	// if (state) {
	// 	setIsSurprise()
	// 	toast("Good Job!", {
	// 		icon: "👏"
	// 	});

	// }
	const navigate: NavigateFunction = useNavigate();
	const onClickLoginButton: React.MouseEventHandler<HTMLButtonElement> = async () => {
		try {
			setLoading(true);
			const result: AxiosResponse = await axios.post(API_BASEURL + "/login", authKey, { headers });
			console.log(result);
			localStorage.setItem("authToken", result.data.access_token);
			navigate("/top", { state: result, replace: false });
		} catch (error) {
			console.log(error);
			setLoading(false);
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
