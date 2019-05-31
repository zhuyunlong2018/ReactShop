import React from 'react';
import HomeNavBar from './components/HomeNavBar';
import HomeBannel from './components/HomeBannel';
import Promotion from './components/Promotion';
import SellWell from './components/SellWell';
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
    componentDidMount(){
        console.log('home')
    }
}
    
export default Home;