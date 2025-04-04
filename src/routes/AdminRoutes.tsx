import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardPage from '../pages/admin/Dashboard';
import JobManagementPage from '../pages/admin/Jobs/JobList';

const AdminRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs" element={<JobManagementPage />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
    </Routes>
  );
};

export default AdminRoutes;