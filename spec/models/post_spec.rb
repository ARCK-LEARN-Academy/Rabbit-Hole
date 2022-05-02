require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "validations" do
    before do
      User.delete_all
      Burrow.delete_all
    end

    it "requires a title" do
      post = Post.new(title: nil)

      post.valid?

      expect(post.errors.messages[:title]).to include("can't be blank")
    end

    it "requires content" do
      post = Post.new(content: nil)

      post.valid?

      expect(post.errors.messages[:content]).to include("can't be blank")
    end

    it "requries a burrow" do
      post = Post.new(content: nil)

      post.valid?

      expect(post.errors.messages[:burrow]).to include("must exist")
    end

    it "requires a user" do
      post = Post.new(content: nil)

      post.valid?

      expect(post.errors.messages[:user]).to include("must exist")
    end

    it "requires title is unique" do
      user = User.create(email: "something@example.com", password: "12S34567$89", password_confirmation: "12S34567$89")
      burrow = Burrow.create(title: "Test Burrow", about: "stuff", image: "http://image.com")

      post_attributes = {
        title: "Test Post",
        content: "Test content",
        burrow_id: burrow.id,
        user_id: user.id
      }

      Post.create(post_attributes)
      invalid_post = Post.create(post_attributes)

      expect(invalid_post.errors.messages[:title]).to include("has already been taken")
    end
  end
end
