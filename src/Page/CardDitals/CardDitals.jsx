import { useParams } from "react-router-dom";


const CardDitals = () => {

    const id = useParams()
    console.log(id)
    return (
        <div>
            hello world
        </div>
    );
};

export default CardDitals;