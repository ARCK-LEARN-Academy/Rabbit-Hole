class BurrowsController < ApplicationController
  def create 
    @burrow = Burrow.create(burrow_params)
    render json: @burrow
  end

  def index
    @burrows = Burrow.all
    render json: @burrows
  end 

  # def new 
  #   @burrow = Burrow.new
  #   @posts = Posts.all
  # end 

  def show 
    @burrow = Burrow.find(params[:id])
    render json: @burrow
    # @posts = Posts.all --> is this needed to show all the posts. 
  end 

  private

  def burrow_params
    params.require(:burrow).permit(:title, :about, :image)
  end
end
