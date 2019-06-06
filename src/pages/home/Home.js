import React from 'react';
import HomeNavBar from './components/HomeNavBar';
import HomeBannel from './components/HomeBannel';
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
                <HomeNavBar />
                <HomeBannel />
                <Promotion showProduct={this.showProduct.bind(this)} />
                <SellWell />
            </div>
        );
    }
    
    componentDidMount() {
        console.log('home')
    }
}

export default withRouter(Home);