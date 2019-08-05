import React from 'react'
import { withRouter } from 'react-router-dom'

/**
 * 404页面
 */
class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        //根目录页面直接跳转到主页
        if (this.props.location.pathname === "/") {
            this.props.history.push("/home")
        }
    }
    render() {
        return (
            <h1>404 not found page</h1>
        )
    }
}

export default withRouter(NotFound)