import React, {Component} from 'react';
import logoUrl from "./ngnlab.png"

export class Logo extends Component{
    render(){
        return(
            <div style={{verticalAlign:"middle",width:"100%",textAlign:"center"}}>
            <a href="http://ngnlab.cn/" style={{display:"inline-block"}}>
                <img src={logoUrl}  alt="LOGO" style={{verticalAlign:"middle",height:"50px",paddingBottom:"15px",width:"70px"}}>
                </img>
                {/* <span style={{fontFamily:"verdana", fontSize:"20px",color:"#000000",textAlign:"center"}}>NGNLab </span> */}
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{fontFamily:"verdana", fontSize:"30px",color:"#6C59B8",display:"inline-block"}}>Word Curve</div>
            </div>
        )
    }
}