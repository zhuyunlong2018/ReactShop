import React from 'react'
import { List, Grid } from 'antd-mobile'
import * as style from './style'

class Category extends React.Component {
    state = {
        activedId: 1
    }

  render() {
    const tabs = [
        { id: 1, title: '男装' },
        { id: 2, title: '女装' },
        { id: 3, title: '男鞋' },
        { id: 4, title: '女鞋' },
        { id: 5, title: '内衣配饰' },
        { id: 6, title: '箱包手袋' },
        { id: 7, title: '数码电子' },
        { id: 8, title: '包子馒头' },
        { id: 9, title: '进口零食' },
        { id: 10, title: '喝茶吃饭' },
        { id: 11, title: '啊啊啊啊' },
        { id: 12, title: '一键睡觉' },
        { id: 13, title: '个人清洁' },
        { id: 14, title: '汽车用品' },
        { id: 15, title: '图书音像' },
        { id: 16, title: '运动户外' },
        { id: 17, title: '酒水饮料' },
        { id: 18, title: '礼品鲜花' },
        { id: 19, title: '生活旅行' },
        { id: 20, title: '二手商品' },
      ];

    const container = [
        { id: 21, title: '男士内衬', children: [
            {id: 22, title: '新品T恤'},
            {id: 23, title: '短袖T恤'}
        ]}
    ];

    
    const sidebar = (
        <List>
            {tabs.map((i, index) => {
            return (
            <List.Item key={index} 
            onClick={() => {
                this.setState({activedId: i.id})
            }}
            >
                <span style={this.state.activedId===i.id? style.actived:{}}>{i.title}</span>
            </List.Item>);
            })}
        </List>
    );
      
    const data1 = Array.from(new Array(7)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    const renderContent = (
        <List>
            {tabs.map((i, index) => {
                return (
                    <List.Item key={index} 
                    style = {{ border: 'none' }}
                    activeStyle = {{ background: '#fff'}}
                    >
                        <div className="sub-title">Custom content</div>
                        <Grid data={data1}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>I am title..</span>
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
  componentDidMount(){
    console.log('catagory')
  }
}

export default Category;

