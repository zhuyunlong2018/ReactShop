import React from 'react'
import ReactDOM from 'react-dom'
import style from './Common.module.scss'

class ToTheTop extends React.Component {

    /**
     * 返回容器顶部
     */
    returnTop() {
        const timer = setInterval(() => {
            let top = ReactDOM.findDOMNode(this.props.dom).scrollTop
            if (top === 0) {
                clearInterval(timer)
            }
            let ispeed = Math.floor(-top / 10)
            ReactDOM.findDOMNode(this.props.dom).scrollTop = top + ispeed
        })
    }

    /**
     * 是否显示返回顶部图标
     */
    isShow() {
        if (this.props.scrollTop===undefined || this.props.scrollTop > 100) {
            return 'block'
        }
        return 'none'
    }

    render() {
        return (
            <div className={style.ToTheTop} onClick={this.returnTop.bind(this)} style={{display: this.isShow()}} >
                <img src={require("PUBLIC/images/go_to_top.png")} alt="" />
            </div >
        )
    }
}

export default ToTheTop