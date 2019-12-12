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
                showSymbol:false,
                itemStyle:{
                    emphasis:{
                        borderWidth:10,
                    },
                },
            }
        });
        return {
            tooltip:{
                trigger:"axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        show:false,
                        formatter: function (params) {
                            if (params.seriesData.length === 0) {
                                window.mouseCurValue = params.value;
                            }
                        }
                    }
                },
                formatter: function (params) {
                    let res = "";
                    // for (let i = 0; i < params.length; i++) {
                    //     let series = params[i];
                    //     sum += Number(series.data);
                    //     if (sum >= window.mouseCurValue) {
                    //         res = series.axisValue + "<br/>" + series.marker + series.seriesName + ":" + series.data + "<br/>";
                    //         break;
                    //     }
                    // }
                    let minDistance = 100,minDistanceIndex=0;
                    for(let i =0;i<params.length;i++){
                        let series = params[i];
                        let distance = (Number(series.data)-window.mouseCurValue)>0?(Number(series.data)-window.mouseCurValue):(window.mouseCurValue-Number(series.data));
                        if(minDistance>distance){
                            minDistance = distance;
                            minDistanceIndex = i;
                        }
                    }
                    let series = params[minDistanceIndex];
                    res = series.axisValue + "<br/>" + series.marker + series.seriesName + ":" + series.data + "<br/>";
                    if(minDistance>0.5){
                        res = "";
                        res += params[0].axisValue;
                        for(let i = 0;i<params.length;i++){
                            let series = params[i];
                            res +=  "<br/>" + series.marker + series.seriesName + ":" + series.data ;
                        }
                    }
                    return res;
                },
            },
            title: {
                text: 'Curve of ' + words.join(', '),
            },
            xAxis: {
                type: 'category',
                data: years,
                name: 'Year',
                boundarygap:false,
            },
            yAxis: {
                type: 'value',
                name: 'similarity'
            },
            legend: {
                data: words,
            },
            series: series,
            toolbox: {
                // left: '',
                orient:"vertical",
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    // restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                show:true,
            },{
                type: 'inside',
                
            }],
        };
    };

    render() {
        return (
            <ReactEcharts key={Object.keys(this.props.values).join(',')}
                option={this.getOption(this.props.values, this.props.years)}
                style={{height: "500px", width: '90%',marginLeft:"5%"}}
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