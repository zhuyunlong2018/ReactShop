import React from 'react';
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import Home from 'SRC/pages/home/Home';
import Category from 'SRC/pages/category/Category'
import Cart from 'SRC/pages/cart/Cart.jsx'
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

    render() {
        const tabs = [
            { title: 'home', icon: images[0], selectIcon: images[1], content: <Home/> },
            { title: 'category', icon: images[2], selectIcon: images[3], content: <Category/> },
            { title: 'cart', icon: images[4], selectIcon: images[5], content: <Cart/> },
            { title: 'my', icon: images[6], selectIcon: images[7], content: <My/> },
          ];
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100vh' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={ 0 }
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
                        onPress={() => {
                            this.setState({
                                selectedTab: i.title,
                            });
                        }}
                    >
                        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                            {i.content}
                        </div>
                    </TabBar.Item>
                    )})
                }
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Pages);