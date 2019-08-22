import React from 'react';
import HomeNavBar from './components/HomeNavBar';
import HomeBanner from './components/HomeBanner';
import Promotion from './components/Promotion';
import SellWell from './components/SellWell';
import { withRouter } from 'react-router-dom'

/**
 * 商城主页
 */
class Home extends React.Component {

    showProduct(id) {
        this.props.history.push('/product/'+ id)
    }

    render() {
        return (
            <div>
                {/* 顶部导航栏 */}
                <HomeNavBar />

                {/* 顶部轮播图 */}
                <HomeBanner />

                {/* 本周专题 */}

                {/* 主题文章推荐 */}

                {/* 热门促销商品 */}
                <Promotion showProduct={this.showProduct.bind(this)} />

                {/* 销量排名商品 */}
                <SellWell />

                {/* 为您推荐商品 */}

            </div>
        );
    }
    
    componentDidMount() {
        console.log('home')
    }
}

export default withRouter(Home);