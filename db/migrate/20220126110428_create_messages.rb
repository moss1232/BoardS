class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :user
      t.references :team
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
