import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import FirstPageFooterLayout from "../templates/FirstPageFooterLayout";
import { AppIntroduction } from "../organism/AppIntroduction";
import { AppIntroductionImage } from "../organism/AppIntroductionImage";
import { Head } from "../templates/Head";

export const AppIntroductionPage = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>IntroducePage -Note me</title>
			</Head>
			<FirstPageFooterLayout>
				<Flex>
					<AppIntroductionImage />
					<AppIntroduction />
				</Flex>
			</FirstPageFooterLayout>
		</>
	);
});
