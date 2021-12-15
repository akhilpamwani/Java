          
          // Import Statements




import React,{useEffect} from 'react';
import './Program.css';
import Aos from 'aos';
import 'aos/dist/aos.css';






export const Heading = (props) => {

                            // Aos Init

 useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
  
   })
                               
                                  
   },
   []);




    return (
        <>
          <h2 
          className="Heading" 
          data-aos="fade-up">{props.h2}</h2>  
        </>
    )
}
