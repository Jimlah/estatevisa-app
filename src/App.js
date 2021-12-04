import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
