import savannah from "../images/savannah.jpg"
import programmer from "../images/programmer.jpg"
import blog3 from "../images/blog3.webp"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export default function Home() 
{
  const {posts} = useContext(PostContext)
  return (
    <div>
      <h1 className='text-center'>Latest Blogs</h1>
      <div className='container-fluid row'>

        {
          posts && posts.length<1?
          <div className="text-info">
            There is no posts at the moment
          </div>:""
        }

      {posts && posts.map((post)=>(

      
        <div className='col-6 col-sm-6 col-md-4 mb-5'>
          <div className="card">
            <div className="overflow-hidden" style={{"height":"30vh"}}>
            <img src={savannah} className="card-img-top" alt="img loading..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <Link to={`/blog/${post.id}`} href="#" className="btn btn-success btn-sm w-100">Read More</Link>
            </div>
          </div>
        </div>
        ))
        }



      </div>
    </div>
  )
}
