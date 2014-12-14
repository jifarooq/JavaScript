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

require 'rails_helper'

RSpec.describe Goal, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
