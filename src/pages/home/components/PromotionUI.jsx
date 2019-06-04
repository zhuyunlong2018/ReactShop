import React from 'react'
import { Flex, WingBlank } from 'antd-mobile'
import './Components.css'
class PromotionUI extends React.Component {

    render() {
        return (
            <div style={{ padding: '15px 0' }}>
                <WingBlank size='lg' className="blank" >
                    <div>----优惠促销----</div>
                    <Flex wrap="wrap" >
                        {this.props.data.map(val => (
                            <div key={val.id} style={{ width: '50%', padding: '5px' }} >
                                <div style={{ display: 'inline-block', width: '100%', height: this.props.imgHeight }} >
                                    <img
                                        src={val.image}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </Flex>
                </WingBlank>
            </div>
        );
    }
}


export default PromotionUI;