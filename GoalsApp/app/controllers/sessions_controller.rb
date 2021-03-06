class SessionsController < ApplicationController
  
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

      # fail
    if @user
      log_in!(@user)
      redirect_to user_url(@user)
    else
      render :new
    end
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
  
end