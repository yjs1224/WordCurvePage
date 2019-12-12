import React, {Component} from 'react';
import debounce from 'lodash/debounce';
import {getCandidate} from "./getData";
import {Select, Spin, message} from 'antd';

const {Option} = Select;

export class WordSelectBar extends Component {
    constructor(props) {
        super(props);
        this.fetchCandidateWord = debounce(this.fetchCandidateWord, 800);
    }

    state = {
        candidates: [],
        fetching: false,
        words: [],
    };
    fetchCandidateWord = query => {
        // this.lastFetchId += 1;
        // const fetchId = this.lastFetchId;
        this.setState({candidates: [], fetching: true});
        getCandidate(query, (candidates) => {
            this.setState({candidates, fetching: false}); 
            if(candidates.length === 0){
            message.info("No Such Word");
        }
        });

    };

    handleChange = words => {
        this.setState({
            candidates: [],
            fetching: false,
            words: words,
        });
        this.props.updateCurve(words);
    };

    render() {
        const {fetching, candidates, words} = this.state;
        return (
            <Select
                mode="multiple"
                value={words}
                placeholder="Search to select words to display"
                notFoundContent={fetching ? <Spin size="small"/> : null}
                filterOption={false}
                onSearch={this.fetchCandidateWord}
                onChange={this.handleChange}
                style={{width: '100%'}}
            >
                {candidates.map(d => (
                    <Option key={d}>{d}</Option>
                ))}
            </Select>
        );
    }
}
