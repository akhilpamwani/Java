                  
                  // Import Statments



                  
import React,{useEffect} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Copy.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const CopyTemplate= (props) => {

                            // Aos Init

 useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
   delay:"10000ms",
  
   })
                               
                                  
   },
   []);          


    return (
        <>
            <CopyToClipboard text={props.copy} >
            <button className="Copy-btn" 
            data-aos={props.aos}
            >Copy</button>
            </CopyToClipboard>  
        </>
    )
}
