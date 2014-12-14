# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  email           :string(255)
#  ssn             :integer
#  session_token   :string(255)      not null
#  password_digest :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :username, :session_token, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password
  
  has_many(
    :goals,
    class_name: "Goal",
    foreign_key: :user_id,
    primary_key: :id
    
  )

  def store_ssn_securely ssn
    self.ssn = ssn
  end

  def self.find_by_credentials username, password
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      return user
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
