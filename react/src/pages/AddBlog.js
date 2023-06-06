
import { useContext, useState } from "react"
import edit from "../images/edit.png"
import { AuthContext } from "../context/AuthContext"
import { PostContext } from "../context/PostContext"
export default function AddBlog() 
{
    const {current_user} = useContext(AuthContext)
    const {AddBlog} = useContext(PostContext)

    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const  handleSubmit = (e) =>{
        e.preventDefault()

        AddBlog(title, content, current_user.id)
    }
  return (
    <div className="container" style={{"min-height":"70vh"}}>
        {current_user && current_user?
        <>
        <h3>Add Blog</h3>
        <div className="row h-full">
            <div className="col-md-6">
               <img src={edit} className="img-fluid" />
            </div>
            <div className="col-md-6">
            <form onSubmit={handleSubmit}>
                <div class="form-group mt-3">
                    <label >Title</label>
                    <input type="text" onChange={e=> setTitle(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                {/* <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Image</label>
                    <input type="file" class="form-control " id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                </div>                 */}
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea type="text" onChange={e=> setContent(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>

                <button type="submit" class="btn mt-3 btn-success">Submit</button>
                </form>
            </div>
        </div>
        </>
        :
       <div>
        Please login to add a blog
       </div>
        }
    </div>
  )
}
