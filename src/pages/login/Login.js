import React from 'react'
import { withRouter } from 'react-router-dom'
import { login } from 'SRC/api/user'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveInfo } from 'SRC/store/user/action'
import LoginUI from './LoginUI'
import Storage from 'SRC/utils/storage'
import { USER_KEY } from 'SRC/utils/keys'

/**
 * 登录页面
 */
class Login extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveInfo: PropTypes.func.isRequired,
    }

    handleLogin(data) {
        login(data).then(res => {
            const userInfo = {
                userName: res.name, //用户名
                mobile: res.mobile, //手机号
                introductor: res.introductor,
                avatar: res.avatar, //头像
                token: res.token, //登录凭证
            }
            //保存到本地
            Storage.setStorage(USER_KEY, userInfo)
            //保存用户信息到redux
            this.props.saveInfo(userInfo)
            //路由跳转
            this.props.history.push('/')
        }).catch(error => { })
    }

    componentWillMount() {
        //有token，直接跳过登录
        if (this.props.userInfo.token !== "") {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <LoginUI handleLogin={this.handleLogin.bind(this)} />
        )
    }
}

export default withRouter(
    connect(state => ({
        userInfo: state.userInfo
    }), {
            saveInfo,
        }
    )(Login)
)

