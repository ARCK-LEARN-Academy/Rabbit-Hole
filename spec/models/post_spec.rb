require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "posts create" do 
    it "can create a post" do 
    end 
    it "won't create a post without a title" do 
    end 
    it "won't create a post with a content" do 
    end 
    it "wont create a post without a burrow_id" do
    end
    it "won't create a post that is not unique" do 
    end
  end 
  describe "posts read" do 
    it "can read a post" do
    end
    it "can read all the posts from a burrow" do 
    end
    it "can read all the posts from a user" do 
    end
  end 
  describe "posts update" do 
    it "can update a post" do 
    end
    it "won't update a post that does not have a title" do
    end
    it "won't update a post that does not have content" do
    end
    it "won't update a post without a burrow_id" do
    end
    it "won't update a post without it being unique" do
    end
  end 
  describe "posts delete" do
    it "can delete a post" do
    end
  end
end
