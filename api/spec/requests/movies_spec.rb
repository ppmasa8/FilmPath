require 'rails_helper'
RSpec.describe Api::V1::MoviesController, type: :request do
  describe 'Get request' do
    before do
      FactoryBot.create_list(:movie, 10)
    end

    # Index action.
    it 'Success request' do
      get api_v1_movies_url
      expect(response.status).to eq 200
    end

    it 'Ensure json length' do
      get api_v1_movies_url
      json = JSON.parse(response.body)
      expect(json.length).to eq(10)
    end

    # Show action.
    it 'Get a specific movie' do
      movie = create(:movie, title: 'test-title')
      get "/api/v1/movies/#{movie.id}"
      json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(json['title']).to eq(movie.title)
    end
  end

  describe 'Post request' do
    it 'Create new movie list' do
      valid_params = { title: 'title', status: 'status', rate: 5 }
      # Verification to create data.
      expect do
        post api_v1_movies_url, params: { movie: valid_params }
      end.to change(Movie, :count).by(1)
    end
  end
end