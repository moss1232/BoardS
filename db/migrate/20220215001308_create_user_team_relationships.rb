class CreateUserTeamRelationships < ActiveRecord::Migration[6.1]

    def change
    create_table :user_team_relationships do |t|
      t.references :user, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end

  end
end
