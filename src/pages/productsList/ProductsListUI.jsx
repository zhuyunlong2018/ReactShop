import React from 'react'
import ReactDOM from 'react-dom'
import { Drawer, NavBar, List, ListView, Icon, PullToRefresh } from 'antd-mobile'
import style from "./ProductsList.module.scss"

class ProductsListUI extends React.Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            open: false,//筛选抽屉开关
            dataSource: ds,//listView组件内容
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
        if (Number(page) < Number(lastPage) && !this.state.upLoading) {
            this.setState({ upLoading: true })
            //接口请求下一页数据,完成后将upLoading设为false
            this.props.changePage(page + 1).finally(() => {
                this.setState({ upLoading: false })
            })
        }
    }

    //下拉刷新
    onRefresh = () => {
        if (!this.state.pullLoading) {
            this.setState({ pullLoading: true })
            //接口请求第一页数据,完成后将pullLoading设为false
            this.props.refresh().finally(() => {
                this.setState({ pullLoading: false })
            })
        }
    }

    //获取item进行展示
    renderRow = (item, i) => {
        return (
            <div className={style.listItem} onClick={() => { this.props.goProductDetail(item.id) }}>
                <div className={style.img}><img src={item.image} alt="" /></div>
                <div className={style.title}>
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
        const { dataSource, upLoading, pullLoading } = this.state;
        const { products, pageNum, pageSize, totalPage } = this.props
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
                    className={style.myDrawer}
                    style={{ minHeight: "100%" }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
                    position={"right"}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                    dragToggleDistance={0}
                >
                    <div className={style.productsListContainer}>
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={dataSource.cloneWithRows(products)}
                            renderRow={(rowData, i) => this.renderRow(rowData, i)}
                            initialListSize={pageSize}
                            pageSize={pageSize}
                            renderFooter={() => (
                                <div style={{ padding: 30, textAlign: 'center', display: upLoading ? 'block' : 'none' }}>
                                    {(pageNum < totalPage) && upLoading ? <Icon type="loading" /> : null}
                                </div>
                            )}
                            onEndReached={() => this.onEndReached(pageNum, totalPage)}
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
                        >暂无数据</ListView>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default ProductsListUI