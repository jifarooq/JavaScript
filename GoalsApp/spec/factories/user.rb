FactoryGirl.define do
  factory :user do
    username Faker::Name.name
    password Faker::Commerce.product_name
  end
  
end