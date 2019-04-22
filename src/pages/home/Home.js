import React from 'react';
import HomeNavBar from './HomeNavBar';
import HomeBannel from './HomeBannel';
import Promotion from './Promotion';
import SellWell from './SellWell';
class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeNavBar/>
                <HomeBannel/>
                <Promotion/>
                <SellWell/>
            </div>
        );
    }
}

export default Home;