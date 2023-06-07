class ApplicationController < Sinatra::Base
    # set :database, { adapter: "sqlite3", database: "/db/database.sqlite3" }

    set :default_content_type, 'application/json'
    set :session =>true

    

    use Rack::Session::Cookie,
    key: 'myapp_session',
    expire_after: 3600, # 1 hour in seconds
    secret: 'myapp_secret_key'



    # Authorize 
    def authorize
       if session[:user_id].blank?
        puts "Authorize called"
        message = {:error=> "Not Authorized"}
        # 
        halt 401, message.to_json
       end
    end

    get "/" do
        "<h1>Welcome to REST APIs CLASS</h1>"
    end

end