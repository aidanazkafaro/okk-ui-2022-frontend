import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Calendar from "./Calendar";

export default function Misi({ misiItem }) {
  const [showTimeline, setShowTimeline] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#E1AA43",
          }}
        >
          <Typography>{misiItem.judul}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F9E1CF",
          }}
        >
          {/* bagian calendar di kiri */}
          <div className="flex flex-wrap">
            <div
              className={`flex-auto w-full md:w-2/4 ${
                showTimeline ? "" : "hidden"
              }`}
            >
              {/* ini isinya timeline dari {misiItem.range.start} sampai {misiItem.range.end} */}
              <Calendar
                startDate={misiItem.range.start}
                endDate={misiItem.range.end}
                showTimeline={showTimeline}
              />
            </div>

            {/* content dari deskripsi misi */}
            <div
              className={`flex-auto w-full md:w-2/3 ${
                showDescription ? "" : "hidden"
              }`}
            >
              {misiItem.deskripsi}
            </div>

            {/* bagian options di kanan */}
            <div className="flex-auto my-auto">
              <div className="w-full md:w-2/4">
                <ol className="relative border-l-2  border-black">
                  <li
                    className={`mb-10 ml-4 text-xl ${
                      showTimeline ? "font-bold" : "font-medium"
                    }  cursor-pointer`}
                    onClick={() => {
                      setShowTimeline(true);
                      setShowDescription(false);
                    }}
                  >
                    {/* yellow circle black border */}
                    <div
                      className={`absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-[6.5px] border border-white dark:border-gray-900 dark:bg-[#E1AA43]`}
                    ></div>
                    Timeline
                    {/* ini isinya timeline dari {misiItem.range.start} sampai {misiItem.range.end} */}
                    <Calendar
                      startDate={misiItem.range.start}
                      endDate={misiItem.range.end}
                      showTimeline={showTimeline}
                    />
                  </li>
                  <li
                    className={`mb-10 ml-4 text-xl ${
                      showDescription ? "font-bold" : "font-medium"
                    } cursor-pointer `}
                    onClick={() => {
                      setShowTimeline(false);
                      setShowDescription(true);
                    }}
                  >
                    <div className="absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-[6.5px] border border-white dark:border-gray-900 dark:bg-[#E1AA43]"></div>
                    Deskripsi Misi
                  </li>
                  <li className="ml-4 text-xl font-medium cursor-pointer">
                    <div className="absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-[6.5px] border border-white dark:border-gray-900 dark:bg-[#E1AA43]"></div>
                    Pengumpulan
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
