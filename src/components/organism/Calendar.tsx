import { Box, Button } from "@chakra-ui/react";
// FullCalendarコンポーネント。
import FullCalendar from "@fullcalendar/react";

// FullCalendarで月表示を可能にするモジュール。
import dayGridPlugin from "@fullcalendar/daygrid";

// FullCalendarで日付や時間が選択できるようになるモジュール。
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

export const Calendar = () => {
	const [addEvent, setAddEvent] = useState([{}]);

	const onAddEvent = () => {
		const event = {
			title: "きのぽライブ",
			date: "2022/02/06"
		};
		setAddEvent([event]);
	};

	return (
		<>
			<Button onClick={onAddEvent}>登録</Button>
			<Box>
				<FullCalendar
					locale="ja"
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					selectable={true}
					weekends={true}
					titleFormat={{
						year: "numeric",
						month: "short"
					}}
					headerToolbar={{
						start: "title"
					}}
					events={addEvent}
				/>
			</Box>
		</>
	);
};
