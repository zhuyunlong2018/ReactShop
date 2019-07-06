import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Storage from 'SRC/utils/storage'
import { saveInfo } from 'SRC/store/user/action'
import { USER_KEY } from 'SRC/utils/keys'
import MyUI from './MyUI'

/**
 * 我的页面
 */
class My extends React.Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveInfo: PropTypes.func.isRequired,
    }

    componentDidMount() {
        //为找到登录token，跳转到登录页面
        if (this.props.userInfo.token === "") {
            this.props.history.push('/login')
        }
    }

    logout() {
        const userInfo = {
            userName: '', //用户名
            mobile: '', //手机号
            introductor: '',
            avatar: '', //头像
            token: '', //登录凭证
        }
        //保存到本地
        Storage.removeStorage(USER_KEY)
        //保存用户信息到redux
        this.props.saveInfo(userInfo)
        //路由跳转
        this.props.history.push('/login')
    }

    render() {
        return (
            <MyUI logout={this.logout.bind(this)} />
        )
    }
}

export default withRouter(
    connect(state => ({
        userInfo: state.userInfo
    }), {
            saveInfo,
        }
    )(My)
)