import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from "date-fns";
import { useMemo } from "react";

interface Event {
  date: Date;
  title: string;
}

interface EventProps {
  events: Event[];
}

const EventCalendar = ({ events }: EventProps) => {
  const currentDate = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDay = getDay(firstDayOfMonth);
  console.log(firstDayOfMonth, lastDayOfMonth, daysInMonth);

  const eventByDate = useMemo(() => {
    return events.reduce((acc: { [key: string]: string[] }, event: Event) => {
      const dateKey = format(event.date, "yyyy-MM-dd");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(event.title);
      return acc;
    }, {});
  }, [events]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day) => {
          return (
            <div key={day} className="font-bold text-center">
              {day}
            </div>
          );
        })}
        {Array.from({ length: startingDay }).map((_, index) => {
          return (
            <div
              key={`empty=${index}`}
              className="border rounded-md text-center p-2"
            />
          );
        })}
        {daysInMonth.map((days, index) => {
          const dateKey = format(days,"yyyy-MM-d")
          const todayEvent = eventByDate[dateKey] ?? []
          return (
            <div
              key={index}
              className={`border rounded-md text-center p-2 ${
                isToday(days) ? "bg-gray-200 text-gray-900" : ""
              }`}
            >
              {format(days, "d")}
              {
                todayEvent.map((event)=>{
                  return(
                    <div key={event} className="bg-green-500 rounded-md text-gray-900">{event}</div>
                  )
                })
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
