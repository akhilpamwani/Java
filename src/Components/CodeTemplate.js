     
                    // Import Statements



                    

import React,{useEffect} from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import {  okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Program.css';
import Aos from 'aos';
import 'aos/dist/aos.css';








export const CodeTemplete = (props) => {

    // Aos Init

 useEffect(() => {
    Aos.init({
   anchorPlacement: 'top-bottom',
  
   })
                               
                                  
   },
   []);




                // Syntax Initialised

    SyntaxHighlighter.registerLanguage('java', java);
    return (
        <>

<SyntaxHighlighter 
language="java" 
style={okaidia} 
className="Code-Java"
data-aos={props.aos}
>{props.code}</SyntaxHighlighter> 
        </>
    )
}
