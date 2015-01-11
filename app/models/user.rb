class User < ActiveRecord::Base
	has_many :addresses

	attr_accessor :country
end
