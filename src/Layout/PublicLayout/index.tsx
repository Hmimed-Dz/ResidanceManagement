import { Layout, theme } from 'antd';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SideBar from '../../Components/Sider';
import { Content } from 'antd/es/layout/layout';

function PublicLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header />
      <Layout>
        <SideBar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              //minHeight: 280,
              background: colorBgContainer,
              backgroundColor:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(215, 215, 215, 1) 100%)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default PublicLayout;
