import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './pages/Main/Wrapper';
import Login from './pages/Auth/Login';
import ForgetPassword from './pages/Auth/ForgetPassword';
import ToastNotification from './components/ungrouped/ToastNotification';
import UserLogin from './pages/Auth/User/Login';
import Auth from './pages/Auth/Auth';
import UserForgetPassword from './pages/Auth/User/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
      <ToastNotification />
      <Routes>
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
          </Route>
        </Route>



        {/* Admin */}
        <Route path="admin" >
          <Route path="auth" element={<Auth />} >
            <Route path="login" element={<Login />} >
              <Route path="" element={<UserLogin />} />
            </Route>
            <Route path="forget-password" element={<ForgetPassword />} >
              <Route path="" element={<UserLogin />} />
            </Route>
          </Route>
        </Route>



        {/* Manager */}
        <Route path="manager" >
          <Route path="auth" element={<Auth />} >
            <Route path="login" element={<Login />} >
              <Route path="" element={<UserLogin />} />
            </Route>
            <Route path="forget-password" element={<ForgetPassword />} >
              <Route path="" element={<UserLogin />} />
            </Route>
          </Route>
        </Route>



        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
