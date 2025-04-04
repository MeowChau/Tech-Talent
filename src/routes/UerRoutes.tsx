import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/user/Home';
import JobDetailPage from '../pages/user/Job/Detail';
import CompanyListPage from '../pages/user/Company/List';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
      <Route path="/companies" element={<CompanyListPage />} />
    </Routes>
  );
};

export default UserRoutes;