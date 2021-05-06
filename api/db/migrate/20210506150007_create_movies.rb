class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :status
      t.integer :rate

      t.timestamps
    end
  end
end
