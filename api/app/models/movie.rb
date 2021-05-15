class Movie < ApplicationRecord
  validates :title, presence: true
  validates :status, presence: true
  validates :rate, presence: true
end
