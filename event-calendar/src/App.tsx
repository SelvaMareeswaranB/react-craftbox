import { addDays, subDays } from "date-fns";
import EventCalendar from "./components/EventCalendar";

function App() {
  return (
    <>
      <EventCalendar
        events={[
          { date: subDays(new Date(), 6), title: "Resume Prep" },
          { date: subDays(new Date(), 1), title: "Revision" },
          {date:addDays(new Date(),3),title:"Complete Project"}
        ]}
      />
    </>
  );
}

export default App;
