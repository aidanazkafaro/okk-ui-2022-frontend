import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  isWithinInterval,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar({startDate, endDate, showTimeline}) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  return (
    <div className={`pt-8 ${showTimeline ? "":"hidden"}`}>
      <div className="max-w-md px-2 mx-auto sm:px-7  md:px-2">
        <div className="md:grid md:divide-gray-200 ">
          <div className=" bg-white shadow-md rounded-md p-2 md:flex">
            <div className="flex-left items-center  md:my-auto ">
              <h2 className="font-semibold text-gray-900 text-lg md:text-2xl text-center flex-wrap">
                {format(firstDayCurrentMonth, "MMMM ")}
            
                {format(firstDayCurrentMonth, "yyyy")}
              </h2>
            </div>
            <div className="flex-right items-center ml-5">
              <div className="grid grid-cols-7 mt-5 text-xs leading-6 text-center text-gray-500 space-x-0">
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-1.5"
                    )}
                  >
                  {console.log(day)}
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && "text-white",
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-red-500",
                        isWithinInterval(day, {
                          start: new Date(startDate),
                          end: new Date(endDate),
                        }) && "bg-[#2B662E] text-[#A9D3AB] rounded-none hover:bg-[#1F4921]",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-900",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-400",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-gray-400 color-black",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-gray-900",
                        !isEqual(day, selectedDay) && "hover:bg-gray-200",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
