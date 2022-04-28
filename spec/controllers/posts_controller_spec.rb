require 'rails_helper'

RSpec.describe PostsController do
  describe "GET show" do
    it "returns the specified post" do
      allow(Post).to receive(:find).with("1").and_return({})

      get :show, params: { id: 1 }

      expect(response).to be_successful
    end
  end

  describe "POST create" do
  end

  describe "PUT update" do
  end

  describe "DELETE destroy" do
  end
end
