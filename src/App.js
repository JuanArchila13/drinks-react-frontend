
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBar } from './components/navBar';
import { OrderHistory } from './pages/OrderHistory';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/order-history" element={<OrderHistory/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;