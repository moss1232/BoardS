class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :user, null: false
      t.references :team, null: false
      t.string :title, null: false
      t.string :content, null: false

      t.timestamps
    end
  end
end
