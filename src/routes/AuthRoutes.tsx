import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/admin/Auth/Login';
import RegisterPage from '../pages/admin/Auth/Register';
import { useAuth } from '../context/AuthContext';

const AuthRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRoutes;