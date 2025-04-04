import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

export default function AdminLayout() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" items={[
          { key: 'dashboard', label: 'Dashboard' },
          { key: 'jobs', label: 'Quản lý công việc' }
        ]} />
      </Header>
      <Content style={{ padding: '24px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}