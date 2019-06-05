import React from 'react'
import { Flex, WingBlank } from 'antd-mobile'
import './SellWell.css'

const requireContext = require.context("PUBLIC/images/home_sellwell", true, /^\.\/.*\.jpg$/)
const images = requireContext.keys().map(requireContext)
class SellWellUI extends React.Component {
    render() {
        return (
            <div>
                <WingBlank size='lg' className="blank" >
                    <div>----热销商品----</div>
                    <Flex style={{ height: '3.4rem' }}>
                        <Flex.Item style={{ height: '100%' }}>
                            <div style={{ height: '100%', padding: '.1rem', overflow: 'hidden' }} >
                                <a
                                    href="#"
                                    style={{ display: 'inline-block', height: '100%' }}
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
                            <div className="flex-item" >
                                <a
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%' }}
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
                            <div className="flex-item" >
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

export default SellWellUI;