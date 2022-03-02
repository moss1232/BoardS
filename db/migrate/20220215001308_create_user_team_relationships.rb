class CreateUserTeamRelationships < ActiveRecord::Migration[6.1]

    def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :password, null: false

      t.index :name
      t.timestamps
    end
  end
end
