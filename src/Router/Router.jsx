import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../MainLayout/MainLaout";
import Home from "../Page/Home";
import Statistics from "../Page/Statistics/Statistics";
import Donation from "../Page/Donation/Donation";
import CardDitals from "../Page/CardDitals/CardDitals";



   const MyCriteadRouter = createBrowserRouter([{

    path:"/",
    element:<MainLaout></MainLaout>,
    children: [{

        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('data.json')
      
    },
    
    {
        path:"/Donation",
        element:<Donation></Donation>
    },
    {
        path:"/Statistics",
        element:<Statistics></Statistics>
    },
    {
        path:"/cardDtls/:id",
        element:<CardDitals></CardDitals>
    }
  


]

        
   }]);
  

export default MyCriteadRouter;