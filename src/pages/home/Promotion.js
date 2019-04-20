import React from 'react';
import {  Flex, WingBlank, WhiteSpace } from 'antd-mobile';


class Promotion extends React.Component {

    render() {
        return (
            <div style={{ padding: '15px 0' }}>
                <WingBlank size='lg' style={blank} >
                    <div>----优惠促销----</div>
                    <Flex style={{ height: '200px'}}>
                        <Flex.Item>fdasfadf</Flex.Item>
                        <Flex.Item>ghg</Flex.Item>
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
    height: '30px',
    lineHeight: '30px'
}


export default Promotion;