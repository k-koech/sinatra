class UsersController < ApplicationController

    get "/users" do
       users = User.all
       users.to_json()
    end


    post "/users/adduser" do
        _username=params[:username]
        _email=params[:email]
        _id_number=params[:id_number]
        _password=params[:password]

        user = User.create(username: _username, email: _email, id_number: _id_number, password: _password)
        if user
            message = {:success=> "User has been created successfully"}
            message.to_json()
        else
            message = {:error=> "Error saving the user"}
            message.to_json()
        end

    end
end