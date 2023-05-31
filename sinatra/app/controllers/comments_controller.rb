class CommentsController < ApplicationController

    get "/comments" do
       comments = Comment.all
       comments.to_json(include: :user)
    end

# =============ADD COMMENT
    post "/comments/addcomment" do
        comment=params[:comment]
        user_id=params[:user_id]
        post_id=params[:post_id]
       
        if(comment.present? &&  post_id.present? && user_id.present?)

            check_user = User.exists?(id: user_id)
            check_post = Post.exists?(id: post_id)
            if check_user===false
                status 406
                message = {:error=> "User trying to add post does not exist!"}
                message.to_json
            elsif check_post===false
                status 406
                message = {:error=> "The Post you are trying to comment doesnt exist!"}
                message.to_json
            else
                comment = Comment.create(comment: comment, post_id: post_id, user_id: user_id)
                if comment
                    message = {:success=> "Comment created successfully"}
                    message.to_json
                else
                    status 406
                    message = {:error=> "Error saving the comment"}
                    message.to_json
                end

            end
        else
            status 406
            message = {:error=> "All field are required"}
            message.to_json
        end
    end





# =============DELETE POST
delete "/comments/delete/:id" do
    check_comment = Comment.exists?(id: params[:id] ) 
    if check_comment
        comment = Comment.find(params[:id])
        comment.destroy
        message = {:success=> "Comment deleted "}
        message.to_json
    else
        status 406
        message = {:error=> "Comment does not exist"}
        message.to_json
    end


end



end