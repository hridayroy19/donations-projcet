import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner/Banner";
import DonationCard from "../Components/DonationsCard/DonationCard";


const Home = () => {

    const donations = useLoaderData()
   
    return (
        <div>
          <Banner></Banner>
          <div className=" mt-7  px-32 py-5 ">
          <DonationCard donations={donations} ></DonationCard>
          </div>
        </div>
    );
};

export default Home;