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
import LandingPage from './pages/Landing/LandingPage';
import EstateCreate from './pages/Estate/EstateCreate';
import EstateIndex from './pages/Estate/EstateIndex';
import DashboardManagerIndex from './pages/Dashboard/DashboardManagerIndex';
import DashboardUserIndex from './pages/Dashboard/DashboardUserIndex';
import HouseIndex from './pages/House/HouseIndex';
import HouseCreate from './pages/House/HouseCreate';
import VisitorIndex from './pages/Visitor/VisitorIndex';
import VisitorCreate from './pages/Visitor/VisitorCreate';
import UserVisitorIndex from './pages/User/UserVisitor/UserVisitorIndex';
import VehicleIndex from './pages/Vehicle/VehicleIndex';
import UserVehicleIndex from './pages/User/UserVehicle/UserVehicleIndex';


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
          <Route index element={<LandingPage />} />

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
                <Route index element={<DashboardUserIndex />} />

                {/* <Route path='houses'>
                  <Route index element={<HouseIndex />} />
                  <Route path='create' element={<HouseCreate />} />
                  <Route path=":id/edit" element={<HouseCreate />} />
                </Route> */}

                <Route path='visitors'>
                  <Route index element={<UserVisitorIndex />} />
                  <Route path='create' element={<EstateCreate />} />
                  <Route path=":id/edit" element={<EstateCreate />} />
                </Route>
                <Route path='vehicles'>
                  <Route index element={<UserVehicleIndex />} />
                  <Route path='create' element={<EstateCreate />} />
                  <Route path=":id/edit" element={<EstateCreate />} />
                </Route>
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
                <Route path='estates'>
                  <Route index element={<EstateIndex />} />
                  <Route path='create' element={<EstateCreate />} />
                  <Route path=":id/edit" element={<EstateCreate />} />
                </Route>
                <Route path='admins'>
                  <Route index element={<DashboardIndex />} />
                  <Route path='create' element={<DashboardIndex />} />
                </Route>
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
              user && role === 'manager' &&
              <Route path="dashboard" element={<Dashboard />} >
                <Route index element={<DashboardManagerIndex />} />
                <Route path='houses'>
                  <Route index element={<HouseIndex />} />
                  <Route path='create' element={<HouseCreate />} />
                  <Route path=":id/edit" element={<HouseCreate />} />
                </Route>
                <Route path='visitors'>
                  <Route index element={<VisitorIndex />} />
                  <Route path='create' element={<VisitorCreate />} />
                  <Route path=":id/edit" element={<EstateCreate />} />
                </Route>
                <Route path='vehicles'>
                  <Route index element={<VehicleIndex />} />
                  <Route path='create' element={<EstateCreate />} />
                  <Route path=":id/edit" element={<EstateCreate />} />
                </Route>
                <Route path='admins'>
                  <Route index element={<DashboardIndex />} />
                  <Route path='create' element={<DashboardIndex />} />
                </Route>
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
