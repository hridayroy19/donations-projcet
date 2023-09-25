import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
        <img  className="h-[10%] w-[10%]" src="https://i.ibb.co/VvPxzj3/Logo.png" alt="" />
      <ul className="flex gap-5 font-bold">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Donation"
            className={({ isActive, isPending })  =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
            
          >
            Donation
          </NavLink>
        </li>    
        
           <li>
          <NavLink
            to="/Statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
