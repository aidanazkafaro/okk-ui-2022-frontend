import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  isWithinInterval,
  startOfToday,
  isDate,
} from "date-fns";
import { useState } from "react";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar({ startDate, endDate }) {
  // let today = startOfToday();
  // let [selectedDay, setSelectedDay] = useState(today);
  // let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse("JUL-2022", "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  return (
    <div className="pt-8 ">
      <div className="max-w-md mx-auto mb-5">
        <div className="md:grid md:divide-gray-200 ">
          <div className=" bg-white shadow-md rounded-md p-2 md:flex">
            <div className="flex-left items-center  md:my-auto mx-auto">
              <h2 className="font-semibold text-gray-900 text-lg md:text-2xl text-center flex-wrap ">
                {format(firstDayCurrentMonth, "MMMM ")}
                <br></br>
                {format(firstDayCurrentMonth, "yyyy")}
              </h2>
            </div>
            <div className="flex-right items-center mx-auto">
              <div className="grid grid-cols-7 mt-5 text-[0.6rem] md:text-xs leading-6 text-center text-gray-500 space-x-0">
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
                      "py-1.5 p-0 m-0"
                    )}
                  >
                    {/* awal akhir pake warna #2B662E */}
                    <button
                      type="button"
                      className={classNames(
                        isWithinInterval(day, {
                          start: new Date(startDate),
                          end: new Date(endDate),
                        }) &&
                          "bg-[#1F4921] text-[#A9D3AB] rounded-none hover:bg-[#1F4921]",
                        isEqual(day, new Date(startDate)) &&
                          "bg-[#2B662E] rounded-l-lg",
                        isEqual(day, new Date(endDate)) &&
                          "bg-[#2B662E] rounded-r-lg",
                         isToday(day) &&
                          "font-semibold",
                        "mx-auto flex h-10 w-full text-[0.7rem] md:text-xs md:h-10 md:w-full items-center justify-center"
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
