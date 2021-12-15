                   
                   // Imports Statements
                   
import { prime,merge,Method,Buffer } from "../Java Code/CodeJava";
import React,{useEffect} from 'react'
import { Heading } from '../Heading/Heading'
import {CopyTemplate} from '../Copy/CopyTemplate'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {CodeTemplete} from '../Prism Template/CodeTemplate'
import './DisplayProgram.css'
 

 export const DisplayProgram= () => {
                


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
        <Heading h2={"Java Programs for class 11"}/>
        <ol type="1">



                       {/* Program Number 1 */}
    
    
    
       <li className="Link" data-aos="fade"> Prime Number</li>
        <CopyTemplate copy={prime} 
        aos={"zoom-in"}/>
        <CodeTemplete code={prime} 
        aos={"zoom-out"}/>


                        {/* Program Number 2 */}


        <li className="Link" data-aos="zoom-in-left"> Merge Number</li>
        <CopyTemplate copy={merge} 
        aos={"zoom-in"}/>
        <CodeTemplete code={merge}  
        aos={"zoom-out-right"}/>



                        {/* Program Number 3 */}



        <li className="Link" data-aos="zoom-in-right"> Functions Program</li>
        <CopyTemplate copy={Method} 
        aos={"zoom-in"}/>
        <CodeTemplete code={Method}  
        aos={"zoom-in"}/>

                         {/* Program Number 4 */}


       <li className="Link" data-aos="zoom-in-right"> Buffereader Character</li>
        <CopyTemplate copy={Buffer} 
        aos={"zoom-in"}/>
        <CodeTemplete code={Buffer}  
        aos={"zoom-in"}/>


        </ol></>

  );
};