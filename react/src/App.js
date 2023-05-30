import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Search from './pages/Search';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Blog from './pages/Blog';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index  element={<Home/>} />
        <Route path='search' element={<Search />} />
        <Route path='addblog' element={<AddBlog />} />
        <Route path='profile' element={<Profile />} />
        <Route path='blog/:id' element={<Blog />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
