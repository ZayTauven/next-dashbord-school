"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Event 1",
    time: "12h00 - 14h00",
    description: "Loreme impsum dolor sit amet, consecteur adipishing elite",
  },
  {
    id: 2,
    title: "Events 2",
    time: "15h00 - 16h00",
    description: "Loreme impsum dolor sit amet, consecteur adipishing elite",
  },
  {
    id: 3,
    title: "Events 3",
    time: "8h30 - 10h00",
    description: "Loreme impsum dolor sit amet, consecteur adipishing elite",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-md h-full p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Événements à venir</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 odd:border-t-zaySky even:border-t-zayPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600"> {event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm"> {event.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
