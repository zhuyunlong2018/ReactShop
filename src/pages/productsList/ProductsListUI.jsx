import React from 'react'
import ReactDOM from 'react-dom'
import { Drawer, NavBar, List, ListView, Icon, PullToRefresh } from 'antd-mobile'
import "./ProductsList.css"

const data = [
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        id: 1,
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];

class ProductsListUI extends React.Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            open: false,//筛选抽屉开关
            dataSource: ds,//listView组件内容
            list: {
                limit: 10,
                offset: 0,
                pageNum: 1,
                pageSize: 10,
                prompt: null,
                rows: data,
                totalCount: 20,
                totalPage: 2
            },
            upLoading: false,//上拉加载动画
            pullLoading: false,//下拉刷新动画
            height: document.documentElement.clientHeight * 3 / 4,//listview容器高度
        }
    }

    componentDidMount() {
        //计算列表容器高度
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        this.setState({ height: hei })
    }

    //上拉加载
    onEndReached = (page, lastPage) => {
        //当前页小于总页数继续请求下一页数据，否则停止请求数据
        if (Number(page) < Number(lastPage)) {
            this.setState({ upLoading: true })
            //接口请求下一页数据,完成后将upLoading设为false
            setTimeout(() => {
                this.setState({ upLoading: false })
            }, 3000);
        }
    }
    //下拉刷新
    onRefresh = () => {
        this.setState({ pullLoading: true })
        //接口请求第一页数据,完成后将pullLoading设为false
        setTimeout(() => {
            this.setState({ pullLoading: false })
        }, 3000);
    }

    //获取item进行展示
    renderRow = (item, i) => {
        return (
            <div className="list-item" onClick={() => { this.props.goProductDetail(item.id) }}>
                <div className="img"><img src={item.img} alt="" /></div>
                <div className="title">
                    <p>{item.title}</p>
                    <p>￥100</p>
                </div>
            </div>
        )
    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }


    render() {
        const { list, dataSource, upLoading, pullLoading } = this.state;
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                        multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                    thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);


        return (
            <div >
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.props.goBackHistory}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }}
                            onClick={this.props.goSearchPage} />,
                        <div key="1" type="ellipsis"
                            onClick={this.onOpenChange}
                        >筛选</div>,
                    ]}
                >检索关键词</NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: "100%" }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                    position={"right"}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    <div className="products-list-container">
                        {
                            list && list.rows && list.rows.length ?
                                <ListView
                                    ref={el => this.lv = el}
                                    dataSource={dataSource.cloneWithRows(list.rows)}
                                    renderRow={(rowData, id1, i) => this.renderRow(rowData, i)}
                                    initialListSize={10}
                                    pageSize={10}
                                    renderFooter={() => (
                                        <div style={{ padding: 30, textAlign: 'center', display: upLoading ? 'block' : 'none' }}>
                                            {(list.pageNum < list.totalPage) && upLoading ? <Icon type="loading" /> : null}
                                        </div>
                                    )}
                                    onEndReached={() => this.onEndReached(list.pageNum, list.totalPage)}
                                    onEndReachedThreshold={20}
                                    onScroll={() => { console.log('scroll'); }}
                                    style={{
                                        height: this.state.height,
                                        width: "100vw",
                                        overflow: 'auto',
                                    }}
                                    pullToRefresh={<PullToRefresh
                                        refreshing={pullLoading}
                                        onRefresh={this.onRefresh}
                                    />}
                                />
                                :
                                list && list.rows && !list.rows.length ?
                                    <div >
                                        <p>暂无数据</p>
                                    </div> : null
                        }
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default ProductsListUI