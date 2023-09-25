
const Card = ({donatcion}) => {

    const handelDonationaAdd =()=>{
       console.log(donatcion);

    }

    const { card_img,category,title,description } = donatcion || {}
    
    return (
        <div>
      <div className="relative flex w-[1100px] h-[700px] flex-col  text-start bg-white bg-clip-border text-gray-700 ">
  <div className="relative my-3  overflow-hidden  bg-white bg-clip-border text-gray-700 ">
    <img className=" w-[90%] h-[75%] p-5 " src={card_img} alt="profile-picture" />
    <button 
    onClick={handelDonationaAdd}
    
    className="-top-16 ml-8 relative p-3 font-bold "> show detals</button>
  </div>
  <div className=" ">
    <h4 className="block font-sans text-2xl font-semibold">
     {title}
    </h4>
    <p className=" text-black">
    {description}
    </p>
  </div>
  
      </div>
        </div>
    );
};

export default Card;