import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import logo from '../../assets/images/condo.png';
const Header: React.FC = () => {
  const { Header } = Layout;

  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `Navigation ${key}`,
  }));
  //   const {
  //     token: { colorBgContainer, borderRadiusLG },
  //   } = theme.useToken();

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      {/* <div style={{ width: '20%' }}>
        <img
          alt="test"
          className="HeaderImg"
          src={logo}
          style={{
            zIndex: 1000,
            backgroundColor: 'white',
            width: '26%',
            marginTop: '20px',
            marginLeft: '45px',
          }}
        />
      </div> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{ flex: 1, minWidth: 0, justifyContent: 'end' }}
      />
    </Header>
  );
};

export default Header;
