class PostsController < ApplicationController

    get "/posts" do
       posts = Post.where(archive: false)
       posts.to_json(include: :user)
    end

# =============ADD POST
    post "/posts/addpost" do
        authorize

        title=params[:title]
        content=params[:content]
        user_id=params[:user_id]
       
        if(title.present? &&  content.present? && user_id.present?)

            check_user = User.exists?(id: user_id)
            if check_user===false
                status 406
                puts "USER NOT EXIST"
                message = {:error=> "User trying to add post does not exist!"}
                message.to_json
            
            else
                post = Post.create(title: title, content: content, user_id: user_id)
                if post
                    message = {:success=> "Post created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the post"}
                    message.to_json
                end

            end
        else
            status 406
            message = {:error=> "All field are required"}
            message.to_json
        end
    end

# =============UPDATE POST
patch "/posts/editpost/:id" do

    authorize


    title=params[:title]
    content=params[:content]
   
   
    if(title.present? &&  content.present? )
        post_find = Post.find_by(id: params[:id])
        post = post_find.update(title: title, content: content)
        if post
            message = {:success=> "Post updated successfully"}
            message.to_json
        else
            status 406
            message = {:error=> "Error updating the post"}
            message.to_json
        end

    else
        status 406
        message = {:error=> "All field are required"}
        message.to_json
    end
end



# =============UPDATE Archive POST
patch "/posts/archive/:id" do
    authorize

    archive=params[:archive]
  
   
    if(archive.present? )
        post_find = Post.find_by(id: params[:id])
        post = post_find.update(archive: archive)
        if post
            message = {:success=> "Post archived"}
            message.to_json
        else
            status 406
            message = {:error=> "Error archiving the post"}
            message.to_json
        end

    else
        status 406
        message = {:error=> "All field are required"}
        message.to_json
    end
end

# =============DELETE POST
delete "/posts/delete/:id" do
    authorize 
    
    check_post = Post.exists?(id: params[:id] ) 
    if check_post
        post = Post.find(params[:id])
        post.destroy
        message = {:success=> "Post deleted successfully"}
        message.to_json
    else
        status 406
        message = {:error=> "The post does not exist"}
        message.to_json
    end


end



end

