import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './pages/Main/Wrapper';
import Login from './pages/Auth/Login';
import ForgetPassword from './pages/Auth/ForgetPassword';
import ToastNotification from './components/ungrouped/ToastNotification';
import Auth from './pages/Auth/Auth';
import UserLogin from './pages/Auth/User/Login';
import ManagerLogin from './pages/Auth/Manager/Login';
import AdminLogin from './pages/Auth/Admin/Login';
import UserForgetPassword from './pages/Auth/User/ForgetPassword';
import AdminForgetPassword from './pages/Auth/Admin/ForgetPassword';
import ManagerForgetPassword from './pages/Auth/Manager/ForgetPassword';
import Dashboard from './layout/Dashboard';
import DashboardIndex from './pages/Dashboard/DashboardIndex';
import { useSelector, useDispatch } from 'react-redux';
import http, { addBearerToken } from './store/baseHttp';
import { clearState } from './services/AuthSlice';
import { useEffect } from 'react';
import ERROR404 from './pages/404';

function App() {

  const { user, role, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const validateUser = async (path) => {
    addBearerToken(token);
    try {
      const response = await http.get(path);
      if (response?.data.status) {
        return true;
      }
      return false;
    } catch (error) {
      dispatch(clearState())
      return true;
    }
  }

  useEffect(() => {
    if (role === 'admin') {
      validateUser('/admin/validate-token')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <ToastNotification />

      < Routes >
        <Route path="/" element={<Wrapper />} >
          <Route index element={<div>Main </div>} />

          {/* Normal Users  */}
          <Route path="user">
            <Route path="auth" element={<Auth />} >
              <Route path="login" element={<Login />} >
                <Route path="" element={<UserLogin />} />
              </Route>
              <Route path="forget-password" element={<ForgetPassword />} >
                <Route path="" element={<UserForgetPassword />} />
              </Route>
            </Route>
            {
              user && role === 'user' &&
              <Route path="dashboard" element={<Dashboard />} >
                <Route index element={<DashboardIndex />} />
              </Route>
            }
          </Route>





          {/* Admin */}
          <Route path="admin" >
            <Route path="auth" element={<Auth />} >
              <Route path="login" element={<Login />} >
                <Route path="" element={<AdminLogin />} />
              </Route>
              <Route path="forget-password" element={<ForgetPassword />} >
                <Route path="" element={<AdminForgetPassword />} />
              </Route>
            </Route>
            {
              user && role === 'admin' &&
              <Route path="dashboard" element={<Dashboard />} >
                <Route index element={<DashboardIndex />} />
              </Route>
            }
          </Route>



          {/* Manager */}
          <Route path="manager" >
            <Route path="auth" element={<Auth />} >
              <Route path="login" element={<Login />} >
                <Route path="" element={<ManagerLogin />} />
              </Route>
              <Route path="forget-password" element={<ForgetPassword />} >
                <Route path="" element={<ManagerForgetPassword />} />
              </Route>
            </Route>
            {
              <Route path="dashboard" element={<Dashboard />} >
                user && role === 'manager' &&
                <Route index element={<DashboardIndex />} />
              </Route>
            }
          </Route>



        </Route>
        <Route path="*" element={
          <div className='w-screen h-screen'>
            <ERROR404 />
          </div>
        } />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
