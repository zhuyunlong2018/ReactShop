import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MyUI from './MyUI'

class My extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired,
    }

    render() {
        return (
            <MyUI />
        )
    }

    componentDidMount(){
        //为找到登录token，跳转到登录页面
        if (this.props.userInfo.token === "") {
            this.props.history.push('/login')
        }
    }
}

export default withRouter(
    connect(state => ({
        userInfo: state.userInfo
    }), {
            
        }
    )(My)
)