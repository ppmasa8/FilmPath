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
    it 'Create new movie' do
      valid_params = { title: 'title', status: 'status', rate: 5 }
      # Verification to create data.
      expect { post '/api/v1/movies', params: { movie: valid_params } }.to change(Movie, :count).by(+1)
    end
  end

  describe 'Put request' do
    it 'edit movie' do
      movie = create(:movie, title: 'test-title')
      put "/api/v1/movies/#{movie.id}", params: { movie: { title: 'new-title' } }
      json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(json['title']).to eq('new-title')
    end
  end

  describe 'Delete request' do
    it 'delete movie' do
      movie = create(:movie)
      expect { delete "/api/v1/movies/#{movie.id}" }.to change(Movie, :count).by(-1)
      expect(response.status).to eq(204)
    end
  end
end