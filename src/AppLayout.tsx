import { Outlet } from "react-router"
import Header from "./Header"


function AppLayout() {
  return (
    
        <main className="flex flex-col min-h-screen bg-lightGrey dark:bg-midnight font-kumbh">
      <Header  />
   <Outlet/>
    </main>
  )
}

export default AppLayout