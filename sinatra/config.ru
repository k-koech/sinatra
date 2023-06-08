require 'bundler/setup'
# require 'sqlite3'

require_relative "./config/environment"

configure do
  set :database, {
    adapter: 'sqlite3',
    database: 'db/development.sqlite3'
  }
end


# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*' # allow requests from ALL frontend origins (if you deploy your application, change this to only allow requests from YOUR frontend origin)
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# Our application
use SessionController
use PostsController
use CommentsController
use UsersController
run ApplicationController
