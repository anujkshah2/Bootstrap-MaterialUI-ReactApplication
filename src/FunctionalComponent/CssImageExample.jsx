import React from 'react'
import image from "./images/banner2.jpg"
// import "../css/style.css"

let h2Style = {
    backgroundColor:"purple",
    color:"white",
    padding:"10px",
    textAlign:"center"
}
export default function CssImageExample() {
    return (
        <>
        {/* <h1>Hello World</h1> */}
            <div className="main">
                <div className="center">
                    <h1 style={{backgroundColor:"navy",color:"white",padding:"10px",textAlign:"center"}}>Functional Component Example</h1>
                    <h2 style={h2Style}>CSS & Image Example</h2>
                    <div className="items">
                        {/* <img src={require("./images/banner1.jpg")} alt="" /> */}
                        <img src={image} alt="" />
                        {/* <img src="/images/banner3.jpg" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
