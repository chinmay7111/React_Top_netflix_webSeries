import React from "react"
import Card from "./Card"
import Jsdata from "./Jsdata";

const Amazon=() =>{
    return(<>

<Card
        key={Jsdata[7].id}
      imgsrc={Jsdata[7].imgsrc}
      title={Jsdata[7].title}
      sname={Jsdata[7].sname}
      link={Jsdata[7].link}
    />
<Card
        key={Jsdata[8].id}
      imgsrc={Jsdata[8].imgsrc}
      title={Jsdata[8].title}
      sname={Jsdata[8].sname}
      link={Jsdata[8].link}
    />
<Card
        key={Jsdata[9].id}
      imgsrc={Jsdata[9].imgsrc}
      title={Jsdata[9].title}
      sname={Jsdata[9].sname}
      link={Jsdata[9].link}
    />
<Card
        key={Jsdata[10].id}
      imgsrc={Jsdata[10].imgsrc}
      title={Jsdata[10].title}
      sname={Jsdata[10].sname}
      link={Jsdata[10].link}
    />
    </>
       );
};

export default Amazon;