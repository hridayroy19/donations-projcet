/* eslint-disable react/prop-types */

import {  NavLink } from "react-router-dom";

const SingleCard = ({donatcion}) => {

  const {card_img, category,title,style,id } = donatcion || {}
  return (
  <div>
    <NavLink to={`/cardDtls/${id}`} >

    <div style={{backgroundColor:style.card_bg}} className="card card-compact w-[312]   h-[270] bg-base-100">
  <figure><img className="h-[90%]" src={card_img} alt="Shoes" /></figure>
  <div  className="card-body">
    <button style={{backgroundColor:style.btn_bg}} className="px-2 mt-2 rounded font-semibold" > {category}  </button>
    <p style={{color:style.t_b_color}} className=" font-semibold text-xl">{title} </p>
  </div>
</div>
      
    </NavLink>



    </div>
  
  

  );
};

export default SingleCard;
