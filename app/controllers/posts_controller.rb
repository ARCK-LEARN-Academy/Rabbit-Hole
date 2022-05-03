

class PostsController < ApplicationController
  def create
    render json: {}, status: 401 unless user_signed_in?

    post = current_user.posts.new(post_params)

    if post.save
      render json: post
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def index
    @posts = Post.all

    render json: @posts
  end 

  def show
    post = Post.find(params[:id])
    render json: post
  end 

  def update
    post = Post.find(params[:id])

    if post.update(post_params)
      render json: post
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    post = Post.find(params[:id])

    if post.destroy
      render json: post
    else
      render json: post.errors
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :burrow_id)
  end
end