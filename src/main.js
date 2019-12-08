import React, {Component} from 'react';
import {WordSelectBar} from "./wordSelectBar";
import {getCurve} from "./getData";
import {WordCurve} from "./wordCurve";
// import { array } from 'prop-types';
// import Background from './background4.jpg';

// var sectionStyle = {
//     width: "100%",
//     height: window.innerHeight,
//     backgroundImage: `url(${Background})` 
//   };

function Download(props) {
    return (
      <button className="download" onClick={props.onClick}
      style={{backgroundColor:"#000000",border:"0px",fontFamily:"verdana",color:"#FFFFFF",fontSize:"20px"}}
      >
          download data
      </button>
    );
  }

export class Main extends Component {
    state = {
        values: {},
        years: []
    };

    updateCurve = (words) => {
        getCurve(words, (res) => {
            this.setState({values: res.values || {}, years: res.years || []});
        })
    };

    renderDownload(){
        return (
            <Download
              onClick={() => this.handleClick()}
            />
          );
    }

    handleClick(){
    // 创建隐藏的可下载链接
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
        const {values, years} = this.state;
        return (
            <div >
                <WordSelectBar updateCurve={this.updateCurve.bind(this)}/>
                <div >
                    <WordCurve values={values} years={years}/>
                    <div className="download" style={{height: "40dp", width: '20%', float: "right", display:"inline-block"}}>
                        {this.renderDownload()}
                        <div style={{marginTop:"100%"}}>
                        <p>This is words' semantic change tool of NGNLab 
                        </p>
                        <a href="http://ngnlab.cn/" >
                            Know more about us 
                        </a>
                        </div>
                    </div> 
                </div>                        

            </div>
        )
    }
}