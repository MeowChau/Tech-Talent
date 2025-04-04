import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/common/AppHeader';

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;