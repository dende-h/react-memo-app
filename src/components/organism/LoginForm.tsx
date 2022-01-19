import { Box, Button, Divider, Flex, Heading, Input, Spinner, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useAuthLogin } from "../../hooks/useAuthLogin";
import { useInputForm } from "../../hooks/useInputForm";
import { PasswordInput } from "../molecule/PasswordInput";

export const LoginForm: VFC = memo(() => {
	const email = useInputForm();
	const password = useInputForm();

	const authKey = { email: email.value, password: password.value };

	const { authLogin, loading } = useAuthLogin();

	const onClickLoginButton: React.MouseEventHandler<HTMLButtonElement> = () => authLogin(authKey);

	return (
		<>
			<Flex justify="center" minHeight="">
				<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading color="teal" as="h1" size="lg" textAlign="center">
						カレンダーメモアプリ
					</Heading>
					<Divider my={4} />
					<Stack spacing={6} py={4} px={10}>
						<Input
							bg="grey.200"
							placeholder="Enter email"
							type={"email"}
							value={email.value}
							onChange={email.onChangeInputForm}
						/>
						<PasswordInput
							bg="grey.200"
							placeholder="Enter Password"
							value={password.value}
							onChange={password.onChangeInputForm}
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
