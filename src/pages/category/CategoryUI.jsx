import React from 'react'
import { List, Grid } from 'antd-mobile'
import './Category.css'

class CategoryUI extends React.Component {
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
                            <span className={this.props.activedId === i.id ? "actived title" : "title"}>{i.title}</span>
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
                                <div className="sub-title">{i.title}</div>
                                <Grid data={i.children}
                                    hasLine={false}
                                    columnNum={3}
                                    onClick={_el => this.props.showProducts(_el.id)}
                                    renderItem={dataItem => (
                                        <div className="grid-item"  >
                                            <img className="icon" src={dataItem.icon} alt="" />
                                            <div className="title">
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
            <ul className="category-box">
                <li className="category">{sidebar}</li>
                <li className="right-container">{renderContent}</li>
            </ul>
        );
    }
}

export default CategoryUI;

