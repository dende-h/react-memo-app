import { Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useState, VFC } from "react";
import { CategoryMemoList } from "../organism/CategoryMemoList";
import { CategoryScheduleList } from "../organism/CategoryScheduleList";
import { CategoryTodoList } from "../organism/CategoryTodoList";

type Props = {
	children: ReactNode;
};

export const CategoryTab: VFC<Props> = (props: Props) => {
	const { children } = props;
	const colors = useColorModeValue(
		["red.50", "teal.50", "blue.50", "purple.50"],
		["red.900", "teal.900", "blue.900", "purple.900"]
	);
	const [tabIndex, setTabIndex] = useState(0);
	const bg = colors[tabIndex];
	return (
		<Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
			<TabList>
				<Tab fontFamily={"cursive"}>All</Tab>
				<Tab fontFamily={"cursive"}>Memo</Tab>
				<Tab fontFamily={"cursive"}>Schedule</Tab>
				<Tab fontFamily={"cursive"}>Todo</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>{children}</TabPanel>
				<TabPanel>
					<CategoryMemoList />
				</TabPanel>
				<TabPanel>
					<CategoryScheduleList />
				</TabPanel>
				<TabPanel>
					<CategoryTodoList />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};
