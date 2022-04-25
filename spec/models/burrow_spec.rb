require 'rails_helper'

RSpec.describe Burrow, type: :model do
  it "can be" do
    expect(Burrow.new).to be_instance_of(described_class)
  end
end
