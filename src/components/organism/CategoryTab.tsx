import { Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

export const CategoryTab = () => {
	const colors = useColorModeValue(["red.50", "teal.50", "blue.50"], ["red.900", "teal.900", "blue.900"]);
	const [tabIndex, setTabIndex] = useState(0);
	const bg = colors[tabIndex];
	return (
		<Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
			<TabList>
				<Tab>Red</Tab>
				<Tab>Teal</Tab>
				<Tab>Blue</Tab>
			</TabList>
			<TabPanels p="2rem">
				<TabPanel>Are 1, 2, 3</TabPanel>
				<TabPanel>Are 1, 2, 3</TabPanel>
				<TabPanel>Red, yellow and blue.</TabPanel>
			</TabPanels>
		</Tabs>
	);
};
