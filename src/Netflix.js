import React from "react"
import Card from "./Card"
import Jsdata from "./Jsdata";

const Netflix =()=>{
    return(
      <>
                <Card
                key={Jsdata[0].id}
            imgsrc={Jsdata[0].imgsrc}
            title={Jsdata[0].title}
            sname={Jsdata[0].sname}
            link={Jsdata[0].link}
            />
                <Card
                key={Jsdata[1].id}
            imgsrc={Jsdata[1].imgsrc}
            title={Jsdata[1].title}
            sname={Jsdata[1].sname}
            link={Jsdata[1].link}
            />
                <Card
                key={Jsdata[2].id}
            imgsrc={Jsdata[2].imgsrc}
            title={Jsdata[2].title}
            sname={Jsdata[2].sname}
            link={Jsdata[2].link}
            />
                <Card
                key={Jsdata[3].id}
            imgsrc={Jsdata[3].imgsrc}
            title={Jsdata[3].title}
            sname={Jsdata[3].sname}
            link={Jsdata[3].link}
            />
                <Card
                key={Jsdata[4].id}
            imgsrc={Jsdata[4].imgsrc}
            title={Jsdata[4].title}
            sname={Jsdata[4].sname}
            link={Jsdata[4].link}
            />
                <Card
                key={Jsdata[5].id}
            imgsrc={Jsdata[5].imgsrc}
            title={Jsdata[5].title}
            sname={Jsdata[5].sname}
            link={Jsdata[5].link}
            />
      </>)
};

export default Netflix;