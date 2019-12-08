import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

export class WordCurve extends Component {
    getOption = (values, years) => {
        const words = Object.keys(values);
        const series = words.map(key => {
            return {
                data: values[key],
                type: 'line',
                name: key,
                smooth: true,
            }
        });
        return {
            title: {
                text: 'Curve of ' + words.join(', '),
            },
            xAxis: {
                type: 'category',
                data: years,
                name: 'Year'
            },
            yAxis: {
                type: 'value',
                name: 'similarity'
            },
            legend: {
                data: words,
            },
            series: series,
        };
    };

    render() {
        return (
            <ReactEcharts key={Object.keys(this.props.values).join(',')}
                option={this.getOption(this.props.values, this.props.years)}
                style={{height: window.innerHeight, width: '80%',float:"left",fontFamily:"verdana"}}
            />
        )
    }
}

WordCurve.defaultProps = {
    values: {
        'testWord1': [0.1, 0.1, 0.2, 0.5, 0.7, 0.6, 0.5, 0.3, 0.3],
        'testWord2': [0.2, 0.3, 0.8, 0.7, 0.5, 0.1, 0.1, 0.1, 0.1],
    },
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
};