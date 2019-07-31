import React from 'react'
import { Carousel } from 'antd-mobile'

class BannelUI extends React.Component {

  render() {
    const { data } = this.props
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {data && data.map(val => (
          <a
            key={val}
            href="#"
            style={{ display: 'inline-block', width: '100%' }}
          >
            <img
              src={val}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}

export default BannelUI;