import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() 
{
  const {current_user, logout} = useContext(AuthContext)

  console.log("CURRENT USER IN NAVBAR ", current_user)

  return (
    <div>
<nav className="navbar navbar-expand-lg bg-white mt-4">
  <div className="container">
    <a className="navbar-brand fw-bold" href="#">Moringa Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/search" className="nav-link active" >Search</Link>
        </li>
      {current_user && current_user?
        <>
               <li className="nav-item">
          <Link to="/addblog" className="nav-link active" >Add Blog</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/profile" className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{current_user && current_user.username}</a></li>
            <li><Link to="/profile" className="dropdown-item" href="#">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" onClick={()=>logout()}>Logout</a></li>
          </ul>
        </li>
        </>:
        <>
        <li className="nav-item">
          <Link to="/login" className="nav-link active" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link active" >Register</Link>
        </li>
        </>
       }



       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}
