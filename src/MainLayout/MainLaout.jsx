import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navabar/Navbar";


const MainLaout = () => {
    return (
        <div>
            <div className=" px-32 py-5"><Navbar></Navbar></div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaout;