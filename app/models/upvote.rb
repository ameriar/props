class Upvote < ActiveRecord::Base
  belongs_to :user
  belongs_to :prop, counter_cache: true
end
