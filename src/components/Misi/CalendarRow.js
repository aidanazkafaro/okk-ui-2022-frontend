import { useState } from "react";

export default function CalendarRow({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
}) 
{
  const activeDay = useState(new Date().getDate())[0];

  let content = [];
  
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td></td>);
    }
    content.push(
      <td className="relative py-3 px-2 md:px-3  hover:text-[#A9D3AB] text-sm text-center text-[#3C3844]">
        1
      </td>
    );
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <>
        {/* add border to today's date  */}
          {activeDay === i + 1 &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td className="relative py-3 px-2 md:px-3  hover:text-[#A9D3AB] text-sm text-center text-[#3C3844] ">
              <span className="p-1 rounded-full border-green-400 border-2">
                {i + 1}
              </span>
            </td>
          ) 
          : (
            <td className="relative py-3 px-2 md:px-3  hover:text-[#A9D3AB] text-sm text-center text-[#3C3844]">
              {i + 1}
            </td>
          )}
        </>
      );
    }

    return <>{content}</>;
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        <>
        {/* add border to today's date */}
          {activeDay === i + (7 * row - firstDay) &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td className="relative py-2 px-1 md:px-2 hover:text-[#A9D3AB] text-center text-[#3C3844]">
              <span className="p-1 rounded-full border-green-400 border-2 text-sm">
                {i + (7 * row - firstDay)}
              </span>
            </td>
          ) : (
            <td className="relative py-2 px-1 md:px-2 hover:text-[#A9D3AB] text-sm  text-center text-[#3C3844]">
              {i + (7 * row - firstDay)}
            </td>
          )}
        </>
      );
    }
  }
  return <>{content}</>;
}
