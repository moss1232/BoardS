class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :user, presence: true
      t.references :team, presence: true
      t.string :title, presence: true
      t.string :content, presence: true

      t.timestamps
    end
  end
end
