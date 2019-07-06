import React from 'react'
import { SearchBar, WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

import "./Search.css"
/**
 * 搜索页面
 */
class Search extends React.Component {

    state = {
        value: '美食',
    };

    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    componentWillMount() {
        
    }

    onChange = (value) => {
        this.setState({ value });
    }

    clear = () => {
        this.setState({ value: '' });
    }

    handleClick = () => {
        // this.manualFocusInst.focus();
    }
    
    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => this.props.history.push('/')}
                    showCancelButton
                    onChange={this.onChange}
                />
                <WhiteSpace />
                <div>搜索历史</div>
            </div>
        )
    }
}
export default withRouter(Search);