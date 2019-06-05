import React from 'react'
import { List, InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';

class LoginUI extends React.Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <List renderHeader={() => '登录页面'}>
                        <InputItem
                            type="phone"
                            value={this.props.phone}
                            placeholder="输入手机号码"
                            onChange={this.props.changePhone}
                        >
                            <div style={{ backgroundImage: `url(${require("PUBLIC/images/login/user.png")})`, backgroundSize: 'cover', height: '.44rem', width: '.44rem' }} />
                        </InputItem>
                        <WhiteSpace size="lg" />
                        <InputItem
                            type="password"
                            value={this.props.password}
                            placeholder="请输入密码"
                            onChange={this.props.changePassword}
                        >
                            <div style={{ backgroundImage: `url(${require("PUBLIC/images/login/lock.png")})`, backgroundSize: 'cover', height: '.44rem', width: '.44rem' }} />
                        </InputItem>
                        <WhiteSpace size="lg" />
                        <Button type="primary" onClick={this.props.handleLogin} >登录</Button>
                        <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default LoginUI

