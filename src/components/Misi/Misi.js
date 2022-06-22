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
    <div className=" my-2 max-w-[1400px] mx-auto lg:px-16 2xl:px-32 3xl:px-0">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#E1AA43",
          }}
          className="m-0 p-0 w-full"
        >
          <div className="grid gap-y-0">
            <div className="">
              <p>{misiItem.misiKe}</p>
            </div>
            <div className="font-semibold">
              <h3>{misiItem.judul}</h3>
            </div>
          </div>
          {/* <Typography>{misiItem.judul}</Typography>
            
            <Typography>{misiItem.misiKe}</Typography> */}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F9E1CF",
          }}
        >
          {/* bagian options di kanan */}
          <div className="flex flex-wrap">
            <div
              className={`flex-auto w-full md:w-2/4 ${
                showTimeline ? "hidden sm:block" : "hidden"
              }`}
            >
              {/* ini isinya timeline dari {misiItem.range.start} sampai {misiItem.range.end} */}
              <div className="">
                <Calendar
                  startDate={misiItem.range.start}
                  endDate={misiItem.range.end}
                />
              </div>
            </div>

            <div
              className={`flex flex-col w-full md:w-2/3 ${
                showDescription ? "hidden sm:flex" : "hidden"
              }`}
            >
              <div className="">
                <h2 className="font-bold">{misiItem.judul}</h2>
              </div>
              <div className="">
                <p className="font-normal">{misiItem.deskripsi}</p>
              </div>
            </div>
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
                    <div
                      className={`absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-[6.5px] border border-white dark:border-gray-900 dark:bg-[#E1AA43]`}
                    ></div>
                    Timeline
                    {/* ini isinya timeline dari {misiItem.range.start} sampai {misiItem.range.end} */}
                    <div
                      className={`md:hidden ${
                        showTimeline ? "visible md:hidden" : "hidden"
                      }`}
                    >
                      <Calendar
                        startDate={misiItem.range.start}
                        endDate={misiItem.range.end}
                      />
                    </div>
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
                    <p
                      className={`font-normal ${
                        showDescription ? "visible md:hidden" : "hidden"
                      }`}
                    >
                      {misiItem.deskripsi}
                    </p>
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
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
