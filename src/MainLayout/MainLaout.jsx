import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navabar/Navbar";


const MainLaout = () => {
    return (
        <div>
            <div className=" px-32 py-5"><Navbar></Navbar></div>
            
           <div className=" px-36 ">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLaout;