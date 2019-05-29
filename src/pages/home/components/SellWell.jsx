import React from 'react';
import {  Flex, WingBlank } from 'antd-mobile';
const requireContext = require.context("PUBLIC/images/home_sellwell", true, /^\.\/.*\.jpg$/);
const images = requireContext.keys().map(requireContext);
class SellWell extends React.Component {


    render() {
        return (
            <div>
                <WingBlank size='lg' style={blank} >
                    <div>----热销商品----</div>
                    <Flex style={{ height: '220px' }}>
                        <Flex.Item style={{ height: '100%' }}>
                            <div style={{ height: '100%', padding: '5px', overflow: 'hidden'}} >
                                <a
                                href="#"
                                style={{ display: 'inline-block', height: '100%'}}
                                > 
                                 <img
                                    src={images[0]}
                                    alt=""
                                    style={{ height: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{ height: '100%' }}>
                            <div style={flextItem} >
                                <a
                                href="#"
                                style={{ display: 'inline-block', width: '100%'}}
                                > 
                                <img
                                    src={images[1]}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            </div>
                            <div style={flextItem} >
                                <a
                                href="#"
                                style={{ display: 'inline-block', width: '100%' }}
                                > 
                                <img
                                    src={images[2]}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            </div>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
const blank = {
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    lineHeight: '30px'
}

const flextItem = {
    width: '100%', 
    height: '50%', 
    padding: '5px',
    overflow: 'hidden'
}
export default SellWell;