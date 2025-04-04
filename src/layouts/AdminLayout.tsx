import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="dashboard">
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="jobs">
            <Link to="/admin/jobs">Quản lý công việc</Link>
          </Menu.Item>
          <Menu.Item key="logout" onClick={logout}>
            Đăng xuất
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;