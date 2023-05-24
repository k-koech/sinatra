import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Search from './pages/Search';
import Home from "./pages/Home"
import Profile from "./pages/Profile"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index  element={<Home/>} />
        <Route path='search' element={<Search />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
