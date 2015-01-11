class Address < ActiveRecord::Base
	# validates :line1, presence: true
	attr_accessor :country
	validates_presence_of :line1
end
