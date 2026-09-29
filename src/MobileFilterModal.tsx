import { MdLocationOn } from "react-icons/md"

function MobileFilterModal() {
  return (
    <div className="fixed inset-0 z-30 bg-black/50  h-screen w-full flex items-center justify-center px-4">
        <div className="w-full h-54.25 rounded-md flex flex-col divide-y divide-darkGrey/20 bg-white dark:bg-veryDarkBlue">
        <div className="px-4 py-6 flex items-center gap-3">
            <MdLocationOn className="w-6 h-6 text-blue" />
            <input type="text" name="" id="" placeholder="Filter by location…" className="text-body text-veryDarkBlue/50 dark:text-white/50 outline-none"/>
        </div>
        <div className="flex flex-col gap-6 px-4 py-5">
          <div className="flex items-center gap-6">
            <input type="checkbox" name="" id="" className="w-6 h-6 bg-veryDarkBlue/10"/>
            <label htmlFor="" className="text-body text-veryDarkBlue dark:text-white font-bold">Full Time Only</label>
          </div>
          <button className="h-12 rounded-md w-full flex items-center justify-center bg-blue text-white text-body font-bold">Search</button>
        </div>
        </div>
        
    </div>
  )
}

export default MobileFilterModal