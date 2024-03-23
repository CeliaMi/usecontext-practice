import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () =>{
    return (
      <div className="bg-gray-900 min-h-screen" >
        <Navbar/>
        <main className="text-gray-400 bg-gray-900 body-font relative container px-5 py-24 mx-auto">
          <Outlet/>
        </main>
      </div>
    )
}

export default LayoutPublic