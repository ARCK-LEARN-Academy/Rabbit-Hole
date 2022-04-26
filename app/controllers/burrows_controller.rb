class BurrowsController < ApplicationController
  def create 
    
    @burrow = Burrow.create(burrow_params)
    render json: @burrow
  end

  def index
    
    @burrows = Burrow.all
    render json: @burrows
  end 

  def show 
    @burrow = Burrow.find(params[:id])
    render json: @burrow
  end 

  private

  def burrow_params
    params.require(:burrow).permit(:title, :about, :image)
  end
end

