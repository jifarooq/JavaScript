# spec/features/auth_spec.rb

require 'rails_helper'

#feature = describe
feature "the signup process" do 
  
  scenario "has a new user page" do
    #what is a page object?
    visit new_user_url
    expect(page).to have_content "sign up"
  end

  feature "signing up a user" do
    before(:each) do
      visit new_user_url
      fill_in 'username', :with => "spaceKAZE"
      fill_in 'password', :with => "12345666"
      click_on "Create User"
    end

    scenario "logs user in after signup" do
      expect(page).to have_content "spaceKAZE"
      expect(page).to have_content 'Sign Out'
    end
    
    scenario "redirects to user's goal page" do 
      expect(page).to have_content "goal"
    end
  end
end

feature "logging in" do 
  
  before(:each) do
    @user = FactoryGirl.create(:user)
    visit new_session_url
    fill_in 'username', :with => @user.username
    fill_in 'password', :with => @user.password
    click_on "Log In Bitches!"
  end

  scenario "shows username on the homepage after signup" do
    expect(page).to have_content @user.username
  end
  
  scenario "redirects to user's goal page" do
    expect(page).to have_content "goal"
  end
end

feature "logging out" do 
  
  before(:each) do
    @user = FactoryGirl.create(:user)
    visit new_session_url
    fill_in 'username', :with => @user.username
    fill_in 'password', :with => @user.password
    click_on "Log In Bitches!"
    click_button "Sign Out"
  end

  scenario "begins with logged out state" do
    visit users_url
    expect(page).to have_content "sign in"
  end
  
  scenario "doesn't show username on the homepage after logout" do
    expect(page).to have_content "you are definately not signed in at all"
  end

end