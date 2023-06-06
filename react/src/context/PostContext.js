
import {createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const PostContext = createContext()

export function PostProvider({children}) 
{
  const nav = useNavigate()
  const [onchange, setonchange] = useState(false)
  const [posts, setPosts] = useState()

   // AddBlog
   const AddBlog = (title, content, userid) =>{
    fetch("/posts/addpost", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title:title, content:content, user_id:userid})
    })
    .then((res)=>res.json())
    .then((response)=>{
        console.log(response)
        if(response.error)
        {
            Swal.fire(
                'Error',
                response.error,
                'error'
              )
        }
        else if(response.success)
        { 
            nav("/")
            Swal.fire(
                'Success',
                response.success,
                'success'
              )
              setonchange(!onchange)
        }
        else{
            Swal.fire(
                'Error',
                "Something went wrong",
                'error'
              )
        }

    })
}
  // Delete Post
  const deletePost = (id) =>{
    fetch(`/posts/delete/${id}`, {
        method: "DELETE",
    })
    .then((res)=>res.json())
    .then((response)=>{
      setonchange(!onchange)
        console.log(response)
        nav("/")
        Swal.fire(
          'Success',
          "Delete success",
          'success'
        )
        nav("/")

    })

}

  // Fetch posts
  useEffect(()=>{
    fetch("/posts", {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((response)=>{
     setPosts(response)
        
    })
}, [onchange])


   const contextData = {
     posts,
     deletePost,
     AddBlog
    }
  return (
    <PostContext.Provider value={contextData}>
       {children}
    </PostContext.Provider>
  )
}
