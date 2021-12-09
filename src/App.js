import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';
import DashboardIndex from './pages/Dashboard/DashboardIndex';
import EstateIndex from './pages/Estate/EstateIndex';
import Wrapper from './pages/Main/Wrapper';
import EstateCreate from './pages/Estate/EstateCreate';
import Login from './pages/Auth/Login';
import Auth from './pages/Auth/Auth';
import ForgetPassword from './pages/Auth/ForgetPassword';
import Estate from './pages/Estate/Estate';
import Admin from './pages/Admin/Admin';
import AdminCreate from './pages/Admin/AdminCreate';
import AdminIndex from './pages/Admin/AdminIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} >
          <Route index element={<div>Main </div>} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} >
            <Route index element={<DashboardIndex />} />
            <Route path="estates" element={<Estate />} >
              <Route index element={<EstateIndex />} />
              <Route path="create" element={<EstateCreate />} />
            </Route>
            <Route path="admins" element={<Admin />} >
              <Route index element={<AdminIndex />} />
              <Route path="create" element={<AdminCreate />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
