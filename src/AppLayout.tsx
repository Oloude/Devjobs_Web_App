import { Outlet } from "react-router"
import Header from "./Header"


function AppLayout() {
  return (
    
        <main className="flex flex-col min-h-screen">
      <Header  />
   <Outlet/>
    </main>
  )
}

export default AppLayout