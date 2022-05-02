require 'rails_helper'

RSpec.describe Burrow, type: :model do
  before do
    Burrow.delete_all
  end

  describe "burrows create" do 
    it "can create a new burrow" do 
      burrow = Burrow.create title: "Happy", about: "Do happy things", image: 'i;lsajoiid'
      expect(Burrow.all.length).to eq 1
    end
    it "won't create a burrow without a title" do 
      burrow = Burrow.create about: "Do happy things", image: 'i;lsajoiid'
      expect(burrow.errors[:title]).to_not be_empty
    end 
    it "wont create a burrow without an about" do 
      burrow = Burrow.create title: "Happy", image: 'i;lsajoiid'
      expect(burrow.errors[:about]).to_not be_empty
    end 
    it "wont create a burrow without an image" do
      burrow = Burrow.create title: "Happy", about: "Do happy things"
      expect(burrow.errors[:image]).to_not be_empty
    end
    it "won't create a burrow with a title that is not unique" do 
      burrow = Burrow.create title: "Happy", about: "Do happy things", image: 'i;lsajoiid'
      burrow2 = Burrow.create title: "Happy", about: "Do happy things", image: 'i;lsajoiid'
      expect(burrow2).to be_invalid
    end
  end 
end 
