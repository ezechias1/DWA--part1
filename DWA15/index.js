import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import About from "./About.js"
import Interest from "./Interest.js"
 import Footer from "./Footer.js"
        
   ReactDOM.render(<Header/>,document.getElementById("header"))    
   ReactDOM.render(<About/>, document.getElementById("about"))
 ReactDOM.render(<Interest/>,document.getElementById("interests")) 
   ReactDOM.render(<Footer/>,document.getElementById("footer"))
        
    
