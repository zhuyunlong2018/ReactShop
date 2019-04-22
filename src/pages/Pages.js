import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from 'SRC/pages/home/Home';
import Category from 'SRC/pages/category/Category'
import Cart from 'SRC/pages/cart/Cart'
import My from 'SRC/pages/my/My'
const requireContext = require.context("PUBLIC/images/footer", true, /^\.\/.*\.png$/);

const images = requireContext.keys().map(requireContext);
class Pages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
        };
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                {pageText}
            </div>
        );
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="home"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${images[0]}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${images[1]}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        // badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent(<Home/>)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[2]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[3]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="category"
                        key="category"
                        // badge={'new'}
                        selected={this.state.selectedTab === 'category'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'category',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent(<Category/>)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[4]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[5]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="cart"
                        key="cart"
                        dot
                        selected={this.state.selectedTab === 'cart'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cart',
                            });
                        }}
                    >
                        {this.renderContent(<Cart/>)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[6]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${images[7]}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                        {this.renderContent(<My/>)}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Pages;