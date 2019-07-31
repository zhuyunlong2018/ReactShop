import React from 'react'
import ReactDOM from 'react-dom'
import { List, Grid } from 'antd-mobile'
import style from './Category.module.scss'



let categoryRightBox
class CategoryUI extends React.Component {

    componentDidMount() {
        categoryRightBox = ReactDOM.findDOMNode(this.lv)
    }
    
    componentDidUpdate() {
        categoryRightBox.scrollTop=0
    }

    render() {
        const sidebar = (
            <List>
                {this.props.tabs.map((i, index) => {
                    return (
                        <List.Item key={index}
                            onClick={() => {
                                this.props.changeTab(i.id)
                            }}
                        >
                            <span className={this.props.activedId === i.id ? style.actived : ""}>{i.title}</span>
                        </List.Item>
                    );
                })
                }
            </List>
        );

        const renderContent = (
            <List>
                {this.props.selectTab[this.props.activedId] &&
                    this.props.selectTab[this.props.activedId].map((i, index) => {
                        return (
                            <List.Item key={i.id}
                                style={{ border: 'none' }}
                                activeStyle={{ background: '#fff' }}
                            >
                                <div className={style.subTitle}>{i.title}</div>
                                <Grid data={i.children}
                                    hasLine={false}
                                    columnNum={3}
                                    onClick={_el => this.props.showProducts(_el.id)}
                                    renderItem={dataItem => (
                                        <div className={style.gridItem}  >
                                            <img className={style.icon} src={dataItem.icon} alt="" />
                                            <div className={style.title}>
                                                <span>{dataItem.title}</span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </List.Item>
                        );
                    })}
            </List>
        );

        return (
            <ul className={style.categoryBox}>
                <li className={style.category}>{sidebar}</li>
                <li className={style.rightContainer} 
                    ref={el => this.lv = el}>
                    {renderContent}
                </li>
            </ul>
        );
    }
}

export default CategoryUI;

