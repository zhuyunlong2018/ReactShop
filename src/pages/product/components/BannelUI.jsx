import React from 'react'
import { Carousel } from 'antd-mobile'

class BannelUI extends React.Component {

  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.props.data.map(val => (
          <a
            key={val.id}
            href="#"
            style={{ display: 'inline-block', width: '100%', height: "3.4rem" }}
          >
            <img
              src={val.image}
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