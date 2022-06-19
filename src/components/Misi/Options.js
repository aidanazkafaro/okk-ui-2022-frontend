import React from "react";

const Options = () => {
  return (
    <div className="w-3/4 md:w-2/4">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4 font-semibold cursor-pointer">
          <div className="absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#E1AA43]"></div>
          Timeline
        </li>
        <li className="mb-10 ml-4 font-semibold cursor-pointer">
          <div className="absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#E1AA43]"></div>
          Deskripsi Misi
        </li>
        <li className="ml-4 font-semibold cursor-pointer">
          <div className="absolute w-3 h-3 bg-[#E1AA43] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-[#E1AA43]"></div>
          Pengumpulan
        </li>
      </ol>
    </div>
  );
};

export default Options;
