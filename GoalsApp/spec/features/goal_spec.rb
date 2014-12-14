# spec/features/goal_spec.rb

require 'rails_helper'

feature "creating goals" do
  
  before(:each) do
    @user = FactoryGirl.create(:user)
    visit new_session_url
    fill_in 'username', :with => @user.username
    fill_in 'password', :with => @user.password
    click_on "Log In Bitches!"
    @goal = FactoryGirl.create(:goal, user_id: @user.id)
    click_on "Create goal"
  end
  
  scenario "user has goals" do
    expect(page).to have_content @goal.body
  end
  
  scenario "anyone can see public goals" do
  end
  
  scenario "private goals can't be seen by other users" do
    
  end
  #stuff
  
end

# before(:each) do
#   visit new_user_url
#   fill_in 'username', :with => "spaceKAZE"
#   fill_in 'password', :with => "12345666"
#   click_on "Create User"
# end