import SingleCard from "./SingleCard/SingleCard";


const DonationCard = ({donations}) => {
    return (
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {
                donations?.map((donatcion) => <SingleCard donatcion={donatcion} key={donatcion.id}></SingleCard>)
            

            }
        </div>
    );
};

export default DonationCard;