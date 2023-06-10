import React from "react";
import Image from "./Image";
import Heading from "./Heading";

function Card(props){
  return(
    <>
  <div className='cards'>
  <div className='card'>
  <Image imgsrc={props.imgsrc}/>
  <div className='card_info'>
  <Heading title={props.title}/>
  <h3 className='card_title'>{props.sname}</h3>
  <a href={props.link} target='_balnk'>
    <button>Watch Now</button>
  </a>
  </div>
  </div>

  </div>
  


  </>
  );
}

export default Card;
