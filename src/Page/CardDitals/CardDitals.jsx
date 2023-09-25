import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card/Card";


const CardDitals = () => {
    const [donatcion,setDonaction]=useState()
const donations =useLoaderData()
    const {id} = useParams()

useEffect(()=>{
  const finddonation=donations?.find( (donatcion) => donatcion.id === id )

  setDonaction(finddonation);
},[id,donations])

 console.log(donatcion);
    return (
        <div>
           <Card  donatcion={donatcion}></Card>
        </div>
      
    );
};

export default CardDitals;