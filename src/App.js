import React from 'react';
import { total} from './Jsdata';
import Netflix from './Netflix';
import Amazon from './Amazon';



  //  const favse = "ntflix";
// const Favs=()=>{
// if ( favse === "netflix"){
//   return<Netflix/>;
 
      
// }else{
//   return<Amazon/>;
// }
// };

const App=()=>(
    <>
    <h1 className='heading_nav'> The top {total} most popular web-series on netflix and amazon </h1>
    
    <Netflix/>
    <Amazon/>
    
    
    {/* <Favs/> */}
    {/* {favse === "netflix" ? <Netflix/>: <Amazon/> } these ternary opretor works like if else   */}
   </>
  );

export default App;
