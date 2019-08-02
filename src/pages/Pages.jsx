import React from 'react';
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import Home from 'SRC/pages/home/Home';
import Category from 'SRC/pages/category/Category'
import Cart from 'SRC/pages/cart/Cart.jsx'
import My from 'SRC/pages/my/My'

//批量引入图标
const requireContext = require.context("PUBLIC/images/footer", true, /^\.\/.*\.png$/);

const images = requireContext.keys().map(requireContext);

/**
 * 商城页面，底部tab栏
 */
class Pages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home",//当前所处页面
            hidden: false,
            fullScreen: false,
        };
    }

    /**
     * 切换tab页面
     * @param {object} page 
     */
    changePage(page) {
        this.setState({
            selectedTab: page.title,
        });
        this.props.history.push('/' + page.title);
    }

    /**
    * 组件更新时检验路由并切换页面
    */
    matchRouterToPage() {
        //过滤路由没有注入属性的页面
        if (!this.props.match.params) return
        //传递过来的页面标题路由
        const page = this.props.match.params.page
        if (this.state.selectedTab !== page) {
            //路由不一致时进行切换页面
            this.setState({ selectedTab: page })
        }
    }

    componentWillMount() {
        console.log('main page will mount')
        this.matchRouterToPage()
    }

    componentDidUpdate() {
        console.log('main page update')
        this.matchRouterToPage()
    }

    render() {
        const tabs = [
            { title: 'home', icon: images[0], selectIcon: images[1], content: <Home /> },
            { title: 'category', icon: images[2], selectIcon: images[3], content: <Category /> },
            { title: 'cart', icon: images[4], selectIcon: images[5], content: <Cart /> },
            { title: 'my', icon: images[6], selectIcon: images[7], content: <My /> },
        ];
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}
                >
                    {tabs.map((i, index) => {
                        return (
                            <TabBar.Item
                                title={i.title}
                                key={i.title}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${i.icon}) center center /  21px 21px no-repeat`
                                }}
                                />}
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${i.selectIcon}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === i.title}
                                // badge={1}
                                onPress={this.changePage.bind(this, i)}
                            >
                                <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                                    {i.content}
                                </div>
                            </TabBar.Item>
                        )
                    })
                    }
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Pages);