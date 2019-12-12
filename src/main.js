import React, {Component} from 'react';
import {WordSelectBar} from "./wordSelectBar";
import {getCurve} from "./getData";
import {WordCurve} from "./wordCurve";
import {Logo} from "./logo";
import {SearchButton} from "./searchButton";
// import {Button} from "antd"
 
// function Download(props) {
//     return (
//       <button className="download" onClick={props.onClick}
//       style={{backgroundColor:"#000000",border:"0px",fontFamily:"verdana",color:"#FFFFFF",fontSize:"20px"}}
//       >
//           download data
//       </button>
//     );
//   }

export class Main extends Component {
    state = {
        values: {},
        years: [],
        curveoptions:[1801,2008,1],
    };

    updateCurve = (words) => {
        getCurve(words, (res) => {
            this.setState({values: res.values || {}, years: res.years || []});
        })
    };

    updateOption = (options) => {
        this.setState({curveoptions: options,})
        console.log(options,this.state.curveoptions);
    }

    // renderDownload(){
    //     return (
    //         <Download
    //           onClick={() => this.handleClick()}
    //         />
    //       );
    // }

    handleClick(){
    var eleLink = document.createElement('a');
    eleLink.download = "curves_of_all_words" ;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    const words = Object.keys(this.state.values)
    var tmp = [];
    var i = 0;
    for(i;i<words.length;i++){
        tmp[2*i] = words[i]+": ";
        tmp[2*i+1] = this.state.values[words[i]]+"\n"; 
    }
    tmp[words.length*2] = "years: " + this.state.years;
    // tmp[0] = words.length;
    var blob = new Blob(tmp);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    }

    render() {
        var {values, years} = this.state;
        var words = Object.keys(values);
        var newvalues ={};
        var newyears = [];
        var startIndex = this.state.curveoptions[0]-1801;
        var endIndex = this.state.curveoptions[1]-2008+2008-1801;
        var step = this.state.curveoptions[2];
        let i = 0;
        for(i;i<words.length;i++){
            var newdata = [];
            let j = 0;
            for(j=startIndex;j<=endIndex;j+=step){
                newdata[(j-startIndex)/step] = values[words[i]][j];
            }
            newvalues[words[i]] = newdata;
        }
        let j =0;
        for(j = startIndex;j<=endIndex;j+=step){
            newyears[(j-startIndex)/step] = years[j];
        }
        if(words.length !==0){
            values = newvalues;
            years = newyears;
            // console.log(newyears);
        }

        return (
            <div >
                <Logo></Logo>
                <WordSelectBar updateCurve={this.updateCurve.bind(this)}/>
                <SearchButton updateOption={this.updateOption.bind(this)} handleClick={this.handleClick.bind(this)}> </SearchButton>
                <WordCurve values={values} years={years}/>
                    {/* <div className="download" style={{height: "40dp", width: '20%', float: "right", display:"inline-block"}}>
                        {this.renderDownload()}
                        <div style={{marginTop:"100%"}}>
                        <p>This is words' semantic change tool of NGNLab 
                        </p>
                        <a href="http://ngnlab.cn/" >
                            Know more about us 
                        </a>
                        </div>
                    </div> 
                </div>                         */}

            </div>
        )
    }
}