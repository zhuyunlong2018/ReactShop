import React from 'react';
import HomeNavBar from './components/HomeNavBar.jsx';
import HomeBannel from './components/HomeBannel.jsx';
import Promotion from './components/Promotion.jsx';
import SellWell from './components/SellWell.jsx';
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