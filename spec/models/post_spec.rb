require 'rails_helper'

RSpec.describe Post, type: :model do
  current_user = User.first_or_create!(email: "something@example.com", password: "12S34567$89", password_confirmation: "12S34567$89")
  current_burrow = Burrow.create(
    title: 'Cartoons',
    about: 'Burrow dedicated to any cartoons!',
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/ed-edd-n-eddy.jpg'
  )

  describe 'posts create' do
    it 'can create a post' do
      burrow = Burrow.first
      user = User.first
      community_post = burrow.posts.create title: 'Community Update', content: 'You are doing a great job!', user_id: user.id
      expect(Post.all.length).to eq 1
    end 

    it 'wont create a post without a title' do
      post = Post.create content: 'You are doing a great job!', burrow_id: 0
      p post.errors[:title]
      expect(post.errors[:title]).to_not be_empty
    end 

    it 'wont create a post without content' do
      post = Post.create title: 'Community Update', burrow_id: 0
      expect(post.errors[:content]).to_not be_empty
    end 

    it 'wont create a post with a title that is not unique' do
      post = Post.create title: 'Community Update', content: 'You are doing a great job!', burrow_id: 0
      post2 = Post.create title: 'Community Update', content: 'You are doing a great job!', burrow_id: 0
      expect(post2).to be_invalid
    end
  end 

  describe "posts read" do 
    # it "can read a post" do
    #   post = Post.create title: 'Community Update', content: 'You are doing a great job!', burrow_id: 0
    #   post2 = Post.find_by_id(Post.id)
    #   expect(post2).to have_content("")
    # end

    it "can read all the posts from a burrow" do 
    end
    it "can read all the posts from a user" do 
    end
  end 

  describe "posts update" do 
    it "can update a post" do 
    end
    it "wont update a post that does not have a title" do
    end
    it "wont update a post that does not have content" do
    end
    it "wont update a post without a burrow_id" do
    end
    it "wont update a post without it being unique" do
    end
  end 

  describe "posts delete" do
    it "can delete a post" do
    end
  end
end
