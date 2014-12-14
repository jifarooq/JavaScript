FactoryGirl.define do
  factory :goal do
    body Faker::Hacker.say_something_smart
    publicalityness = true
    completionocity = false
  end
  
end