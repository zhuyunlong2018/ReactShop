import React from 'react'
import { List, Grid } from 'antd-mobile'
import * as style from './style'

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
                <span style={this.props.activedId===i.id? style.actived:{}}>{i.title}</span>
            </List.Item>);
            })}
        </List>
    );
      
    const renderContent = (
        <List>
            { this.props.selectTab[this.props.activedId] &&
            this.props.selectTab[this.props.activedId].map((i, index) => {
                return (
                    <List.Item key={i.id} 
                    style = {{ border: 'none' }}
                    activeStyle = {{ background: '#fff'}}
                    >
                        <div className="sub-title">{ i.title }</div>
                        <Grid data={ i.children }
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>{ dataItem.title }</span>
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
        <ul style={style.categoryBox}>
            <li style={style.category}>{sidebar}</li>
            <li style={style.rightContainer}>{renderContent}</li>
        </ul>
    );
  }
}

export default CategoryUI;

