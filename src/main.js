import React, {Component} from 'react';
import {WordSelectBar} from "./wordSelectBar";
import {getCurve} from "./getData";
import {WordCurve} from "./wordCurve";

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

    render() {
        const {values, years} = this.state;
        return (
            <div>
                <WordSelectBar updateCurve={this.updateCurve.bind(this)}/>
                <WordCurve values={values} years={years}/>
            </div>
        )
    }
}