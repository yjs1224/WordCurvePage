import React, {Component} from 'react';
// import {Select} from 'antd';
import { InputNumber, Select, Button} from 'antd';
const { Option } = Select;

// function onChange(value) {
//   console.log('changed', value);
// }

export class SearchButton extends Component{
    // constructor(props) {
    //     super(props);
    // }
    state = {
        startyear: 1801,
        lastyear: 2008,
        smoothyears: 1,
    };
    handleStartYearChange = value => {
        this.setState({
            startyear:value,
        });
        // console.log('changed startyear', this.state.startyear);
    };
    handleLastYearChange = value => {
        this.setState({
            lastyear:value,
        });
        // console.log('changed lastyear', this.state.lastyear);
    };
    handleSmoothYearsChange = value => {
        this.setState({
            smoothyears: parseInt(value),
        });
        // console.log('changed smoothyears',this.state.smoothyears);
    };

    handleClick = event =>{
        //改变曲线的设置
        // console.log('state',this.state.startyear,this.state.lastyear,this.state.smoothyears);
        this.props.updateOption([this.state.startyear,this.state.lastyear,this.state.smoothyears]);
    }

    handleStartYearChangeBetter = event =>{
        this.handleStartYearChange(event);
        this.handleClick();
    }

    handleLastYearChangeBetter = event =>{
        this.handleLastYearChange(event);
        this.handleClick();
    }

    handleSmoothYearsChangeBetter = event =>{
        this.handleSmoothYearsChange();
        this.handleClick();
    }
    render(){
        return(
            <div style={{marginLeft:"20%"}}>
               from&nbsp;
               <InputNumber min={1801} max={2008} defaultValue={1801} onChange={this.handleStartYearChange} onPressEnter={this.handleClick}/> 
               &nbsp;to&nbsp;
               <InputNumber min={1801} max={2008} defaultValue={2008} onChange={this.handleLastYearChange} onPressEnter={this.handleClick}/>
               &nbsp;with smoothing of&nbsp;
               {/* <InputNumber min={1801} max={2008} defaultValue={2008} onChange={this.handleSmoothYearsChange} /> */}
               <Select defaultValue="1" style={{ width: 80 }} onChange={this.handleSmoothYearsChange} onPressEnter={this.handleClick} disabled>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    {/* <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option> */}
                    <Option value="10">10</Option>
                    {/* <Option value="20">20</Option>
                    <Option value="30">30</Option> */}
                </Select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="default"  onClick={this.handleClick}>
                    search lots of words
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.props.handleClick}>
                    Download Data
                </Button>
            </div>

        )
    }
}