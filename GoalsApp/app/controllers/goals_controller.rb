class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
    flash[:errors] = @goal.errors.full_messages unless @goal.save
    redirect_to redirect_to user_url(params(:user_id))
  end
  
  def destroy
    @goal = Goal.find(params[:id])
    user_person_guy = @goal.user_id
    @goal.destroy!
    redirect_to user_url(user_person_guy)
  end
  
  def edit
    render :edit
  end
  
  def update
    @goal = Goal.find(params[:id])
    flash[:errors] = @goal.errors.full_messages unless @goal.save
    redirect_to redirect_to user_url(params(:user_id))
  end
  
  private
  def goal_params
    params.require(:goal).permit(:body, :user_id, :publicalityness, :completionocity)
  end
  
end