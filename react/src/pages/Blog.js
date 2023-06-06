import React, { useContext } from 'react'
import blog2 from "../images/blog2.jpg"
import { useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext'
import { AuthContext } from '../context/AuthContext'
export default function Blog() 
{
  const {posts, deletePost} = useContext(PostContext)
  const {current_user} = useContext(AuthContext)

  const {id} = useParams()
  const singlePost = posts && posts.find(post =>(
    post.id==id
  ))

  console.log(singlePost)


  return (
    <div className='container mx-auto'>
        <h4>{singlePost && singlePost.title}</h4>
        <div className='row gx-5'>
            <div className='col-lg-8 bg-light'>
              <img src={blog2} className='img-fluid' alt='image' />
             
              <div className='d-flex mt-4 gap-5 '>
                <p>Author: {singlePost && singlePost.user.username}</p>
                <p>Date posted: {singlePost && singlePost.created_at }</p>             
                {current_user && current_user.username==singlePost.user.username?
                <>
                <button className='btn btn-success btn-sm'>Edit</button>
                <button onClick={()=>deletePost(singlePost.id)} className='btn btn-danger btn-sm'>Delete</button>
                </>:""
                }
                </div>
              <p className='mt-3'>
              {singlePost && singlePost.content}
                </p>
            </div>


            <div className='col-lg-4'>
            <div className='card p-2'>
                <h5 className='fw-thin mt-5'>LATEST NEWS</h5>
                <h6>Our first office</h6>
                <p>
                        Over the past year, Volosoft has undergone many changes! After months of preparation.

                        Read in 9 minutes
                        Enterprise Design tips
                        Over the past year, Volosoft has undergone many changes! After months of preparation.

                        Read in 14 minutes
                        Our first project with React
                        Over the past year, Volosoft has undergone many changes! After months of preparation.

                        Read in 4 minutes
                </p>
                <form className='mt-5'>
                    <h6>Subscribe</h6>
                    <div class="form-group my-4">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" />
                    </div>

                    <button type="submit" class="btn btn-success w-100">Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}
