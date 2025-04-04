import { BrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import AdminLayout from '../layouts/AdminLayout';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public User Routes */}
        <Route element={<AppLayout />}>
          <Route path="/*" element={<UserRoutes />} />
        </Route>

        {/* Admin Auth Routes */}
        <Route path="/admin/auth/*" element={<AuthRoutes />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="*" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;