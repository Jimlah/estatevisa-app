import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';
import DashboardIndex from './pages/Dashboard/DashboardIndex';
import EstateIndex from './pages/Estate/EstateIndex';
import Wrapper from './pages/Main/Wrapper';
import EstateCreate from './pages/Estate/EstateCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} >
          <Route index element={<div>Main </div>} />
          <Route path="dashboard" element={<Dashboard />} >
            <Route index element={<DashboardIndex />} />
            <Route path="estates" element={<EstateIndex />} />
            <Route path="estates/create" element={<EstateCreate />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
