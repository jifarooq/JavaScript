# == Schema Information
#
# Table name: goals
#
#  id              :integer          not null, primary key
#  body            :string(255)      not null
#  publicalityness :boolean          default(TRUE), not null
#  completionocity :boolean          default(FALSE), not null
#  user_id         :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class Goal < ActiveRecord::Base
  #validates :body, :user_id, :publicalityness, :completionocity, presence: true
  after_initialize :ensure_bools
  
  def ensure_bools
    self.publicalityness ||= true
    self.completionocity ||= false
  end
  
  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
  
end
