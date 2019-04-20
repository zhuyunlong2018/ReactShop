import React from 'react';
import HomeNavBar from './HomeNavBar';
import HomeBannel from './HomeBannel';
import Promotion from './Promotion';
class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeNavBar></HomeNavBar>
                <HomeBannel></HomeBannel>
                <Promotion></Promotion>
            </div>
        );
    }
}

export default Home;