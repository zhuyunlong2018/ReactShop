import React from 'react';
import {  Flex, WingBlank } from 'antd-mobile';

class PromotionUI extends React.Component {

    render() {
        return (
            <div style={{ padding: '15px 0' }}>
                <WingBlank size='lg' style={blank} >
                    <div>----优惠促销----</div>
                    <Flex wrap="wrap" >
                    {this.props.data.map(val => (
                        <div key={val} style={{ width: '50%', padding: '5px'}} >
                            <a
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.props.imgHeight }}
                            >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        </div>
                        
                    ))}
                    </Flex>
                </WingBlank>
            </div>
        );
    }
}

const blank = {
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    lineHeight: '30px'
}


export default PromotionUI;