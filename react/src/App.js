import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Search from './pages/Search';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Blog from './pages/Blog';
import AddBlog from './pages/AddBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
      <PostProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index  element={<Home/>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='search' element={<Search />} />
          <Route path='addblog' element={<AddBlog />} />
          <Route path='profile' element={<Profile />} />
          <Route path='blog/:id' element={<Blog />} />
        </Route>
      </Routes>
      </PostProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
