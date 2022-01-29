import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import FirstPageFooterLayout from "../templates/FirstPageFooterLayout";
import { AppIntroduction } from "../organism/AppIntroduction";
import { AppIntroductionImage } from "../organism/AppIntroductionImage";

export const AppIntroductionPage = memo(() => {
	return (
		<FirstPageFooterLayout>
			<Flex>
				<AppIntroductionImage />
				<AppIntroduction />
			</Flex>
		</FirstPageFooterLayout>
	);
});
