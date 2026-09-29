import { HiOutlineSearch } from "react-icons/hi";
import { RiFilter2Fill } from "react-icons/ri";
import MobileFilterModal from "./MobileFilterModal";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Filter() {
  return (
    <div className="bg-white dark:bg-veryDarkBlue rounded-md w-full h-20 flex items-center justify-between gap-4 px-4 py-4 md:divide-x md:divide-darkGrey/20 md:px-0 md:py-0 ">
      {/* <MobileFilterModal/> */}
      <input
        type="search"
        name=""
        id=""
        placeholder="Filter by title…"
        className="text-body text-veryDarkBlue/50 dark:text-white/50 outline-none min-w-0 flex-1 md:hidden"
      />
      <div className="flex items-center gap-3 md:hidden">
        <button>
          <RiFilter2Fill className="w-5 h-5 text-darkGrey dark:text-white" />
        </button>
        <button className="w-12 h-12 rounded-md flex items-center justify-center bg-blue text-white">
          <HiOutlineSearch className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden md:flex px-4 items-center gap-3 flex-1 h-full">
        <FaSearch className="w-6 h-6 text-blue" />
        <input
          type="search"
          name=""
          id=""
          placeholder="Filter by title…"
          className="text-body text-veryDarkBlue/50 dark:text-white/50 outline-none"
        />
      </div>
      <div className="hidden md:flex items-center px-4 gap-4 flex-1 h-full">
        <MdLocationOn className="w-6 h-6 text-blue" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Filter by location…"
          className="text-body text-veryDarkBlue/50 dark:text-white/50 outline-none"
        />
      </div>
      <div className="hidden md:flex items-center gap-3 justify-between px-4 flex-1 h-full">
        <div className="flex items-center gap-6">
            <input type="checkbox" name="" id="" className="w-6 h-6 bg-veryDarkBlue/10"/>
            <label htmlFor="" className="text-body text-veryDarkBlue dark:text-white font-bold">Full Time Only</label>
          </div>
          <button className="h-12 rounded-md w-auto px-4 flex items-center justify-center bg-blue text-white text-body font-bold">Search</button>
      </div>
    </div>
  );
}

export default Filter;
