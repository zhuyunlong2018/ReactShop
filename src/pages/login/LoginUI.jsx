import React from 'react'
import { List, InputItem, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import Reg from 'SRC/utils/reg'

class LoginUI extends React.Component {
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
            if (!error) {
                let data = value
                data.phone = data.phone.replace(/\s*/g, "")
                this.props.handleLogin(data)
            } else {
                for (var i in error) {
                    const errorMsg = error[i].errors[0].message
                    Toast.info(errorMsg, 1);
                    return false;
                }
            }
        });
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        let errors = []
        return (
            <div>
                <WingBlank>
                    <List renderHeader={() => '登录页面'}>
                        <InputItem
                            {...getFieldProps('phone', {
                                rules: [
                                    { required: true, message: "手机号必填" },
                                    {
                                        validator(rule, value, callback, source, options) {
                                            if (!Reg.isPhone(value.replace(/\s*/g, ""))) {
                                                callback("手机号码有误");
                                            } else {
                                                callback(errors)
                                            }
                                        }
                                    }
                                ],
                            })}
                            type="phone"
                            error={getFieldError('required') ? errors.join(',') : null}
                            placeholder="输入手机号码"
                        >
                            <div style={{ backgroundImage: `url(${require("PUBLIC/images/login/user.png")})`, backgroundSize: 'cover', height: '.44rem', width: '.44rem' }} />
                        </InputItem>
                        <WhiteSpace size="lg" />
                        <InputItem
                            {...getFieldProps('password', {
                                rules: [
                                    { required: true, message: "密码必填" },
                                    {
                                        validator(rule, value, callback, source, options) {
                                            if (!Reg.checkPwd(value)) {
                                                callback("密码有误");
                                            } else {
                                                callback(errors)
                                            }
                                        }
                                    }
                                ],
                            })}
                            type="password"
                            error={getFieldError('required') ? errors.join(',') : null}
                            placeholder="请输入密码"
                        >
                            <div style={{ backgroundImage: `url(${require("PUBLIC/images/login/lock.png")})`, backgroundSize: 'cover', height: '.44rem', width: '.44rem' }} />
                        </InputItem>
                        <WhiteSpace size="lg" />
                        <Button type="primary" onClick={this.submit} >登录</Button>
                        <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default createForm()(LoginUI);

