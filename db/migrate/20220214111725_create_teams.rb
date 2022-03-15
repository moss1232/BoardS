class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name, presence: true
      t.string :password, presence: true

      t.timestamps
    end
add_index :teams, :name, unique: true
  end
end
