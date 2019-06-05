import React from 'react'
import { Popover, NavBar, Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class HomeNavBarUI extends React.Component {

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '.32rem' }}
              onClick={() => this.props.history.push('/search')}
            />
            ,
            <Popover key="1" mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.props.visible}
              overlay={[
                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                  <span style={{ marginRight: ".1rem" }}>Help</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.props.handleVisibleChange}
              onSelect={this.props.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 .3rem',
                marginRight: '-.3rem',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          ]}
        >某某商城</NavBar>
      </div>
    )
  }
}

export default withRouter(HomeNavBarUI);
