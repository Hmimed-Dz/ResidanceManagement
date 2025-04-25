import { Button, Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],

    user?: IAppUser,
    theme?: 'light'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      user,
      label,
      theme,
    } as MenuItem;
  }

  const items = [
    getItem("Appels d'offres", 'sub1', <SettingOutlined />, [
      getItem(
        <Link to="/" replace>
          Appels d&apos;offres
        </Link>,
        'Appeldoffre'
      ),
      getItem(
        <Link to="/Clarifications" replace>
          Demandes de Clarifications
        </Link>,
        'Clarifications'
      ),
      getItem(
        <Link to="/Prorogation" replace>
          Demandes de prorogations
        </Link>,
        'Prorogation'
      ),
      getItem(
        <Link to="/DemandeInformations" replace>
          Demandes d&apos;informations
        </Link>,
        'DemandeInformations'
      ),
      getItem(
        <Link to="/InformationDiffusee" replace>
          Informations Diffusées
        </Link>,
        'InformationDiffusee'
      ),
    ]),
    getItem('Administration', 'sub5', <SettingOutlined />, [
      getItem(
        <Link to="/Soumissionaires" replace>
          Comptes Soumissionaires
        </Link>,
        'Soumissionaires'
      ),
      getItem(
        <Link to="/MonEntreprise" replace>
          Mon Entreprise
        </Link>,
        'Mon Entreprise'
      ),
    ]),
  ];

  return (
    <Sider width={collapsed ? '20' : '260'} trigger={null} theme="light">
      <Button
        type="text"
        icon={
          collapsed ? (
            <MenuUnfoldOutlined style={{ color: 'white' }} />
          ) : (
            <MenuFoldOutlined style={{ color: 'white' }} />
          )
        }
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{
          transform: `translate(-2px, -43px)`,
          fontSize: '16px',
          width: 38,
          height: 40,
        }}
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['Appeldoffre']}
        defaultOpenKeys={['sub1', 'sub5']}
        // onClick={Screensize}
        style={{
          visibility: collapsed === true ? 'hidden' : 'visible',
          // height: '100%',
          borderRight: 0,
        }}
        items={items}
      />
      {/* <LeftNavigation collapse={collapsed}></LeftNavigation> */}
    </Sider>
  );
}
